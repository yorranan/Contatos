import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from 'src/app/model/entities/contato';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  lista_contato: Contato[] = [];
  constructor(private router: Router, private contatoService: ContatoService) {
    this.lista_contato = this.contatoService.obterTodos();
  }

  irParaCadastrar(){
    this.router.navigate(["/cadastrar"])
  }
  
}


