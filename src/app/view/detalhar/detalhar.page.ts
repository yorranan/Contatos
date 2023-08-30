import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from 'src/app/model/entities/contato';
import { Genero } from 'src/app/model/enumerates/genero';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {

  contato!: Contato;
  indice!: number;
  nome!: string;
  telefone!: number;
  email!: string;
  genero!: Genero;
  edicao: boolean = true;

  constructor(private actRoute: ActivatedRoute, 
    private contatoService: ContatoService,
    private router: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe((parametros) => {if(parametros['indice']){
      this.indice = parametros['indice'];
      this.contato = this.contatoService.obterPorIndice(this.indice);
    }
  });
    this.nome = this.contato.nome;
    this.email = this.contato.email;
    this.telefone = this.contato.telefone;
    this.genero = this.contato.genero;
  }
  habilitarEdicao(){
    this.edicao = this.edicao ? false : true;
  }
  editar(){
    let novo: Contato = new Contato(this.nome, this.telefone, this.email, this.genero);
    novo.email = this.email;
    novo.genero = this.genero;
    novo.email = this.email;
    novo.nome = this.nome;
    this.contatoService.editar(novo, this.indice);
    this.router.navigate(['/home']);
  }
  excluir(){
    this.contatoService.excluir(this.indice);
    this.router.navigate(['/home']);
  }
}
