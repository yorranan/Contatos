import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome!: string;
  telefone! : number;
  lista_contatos: any[] = [
    {"nome": "Carlos Eduardo Iatskiu", "telefone": 91094415},
    {"nome": "Richard Gonçalves", "telefone": 91094400},
    {"nome": "Josiel Kulk", "telefone": 91091115},
    {"nome": "Carolina Almeida", "telefone": 91091100}
  ];

  constructor() {}

  cadastrar(){
    this.lista_contatos.push({"nome" : this.nome, "telefone": this.telefone});
  }

}
