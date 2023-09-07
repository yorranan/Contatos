import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/model/entities/contato';
import { Genero } from 'src/app/model/enumerates/genero';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {

  contato!: Contato;
  nome!: string;
  telefone!: number;
  email!: string;
  genero!: Genero;
  edicao: boolean = true;

  constructor(
    private firebase: FirebaseService,
    private router: Router,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.contato = history.state.contato;
    this.nome = this.contato.nome;
    this.email = this.contato.email;
    this.telefone = this.contato.telefone;
    this.genero = this.contato.genero;
  }
  habilitarEdicao() {
    this.edicao = this.edicao ? false : true;
  }
  editar() {
    if (!this.nome || !this.email || !this.telefone || !this.genero) {
      this.presentAlert("Erro", "Todos os campos são obrigatórios");
    }
    else {
      this.presentAlert("Sucesso", "Usuário alterado com sucesso")
      let novo: Contato = new Contato(this.nome, this.telefone, this.email, this.genero);
      novo.email = this.email;
      novo.genero = this.genero;
      novo.email = this.email;
      novo.nome = this.nome;
      this.firebase.update(novo, this.contato.id);
      this.router.navigate(['/home']);
    }
  }
  excluir() {
    this.firebase.delete(this.contato.id);
    this.router.navigate(['/home']);
  }

  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel'
    },
    {
      text: 'Confirmar',
      role: 'confirm',
      handler: () => {
        this.excluir();
      },
    },
  ];

  

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
