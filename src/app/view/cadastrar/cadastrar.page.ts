import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/model/entities/contato';
import { Genero } from 'src/app/model/enumerates/genero';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  nome!: string;
  telefone! : number;
  email!: string;
  genero!: Genero;

  constructor(private router: Router, private alertController: AlertController, private contatoService: ContatoService) { 

  }

  ngOnInit() {
  }



  cadastrar(){
    if (!this.nome || !this.telefone|| !this.email || !this.genero){
      this.presentAlert("Erro", "Todos os campos são obrigatórios");
    }
    else{
      this.presentAlert("Sucesso", "Usuário cadastrado com sucesso")
      let aux: Contato = new Contato(this.nome, this.telefone, this.email, this.genero);
      this.contatoService.cadastrar(aux);
      this.router.navigate(["/home"]);
    }
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
