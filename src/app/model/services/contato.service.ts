import { Injectable } from '@angular/core';
import { Contato } from '../entities/contato';
import { Genero } from '../enumerates/genero';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private lista_contatos: Contato[] = [];

  constructor() {
    let c0: Contato = new Contato("Gab", 12345677, "gab@email.com", Genero.FEMINIO);
    this.lista_contatos.push(c0);
  }

  public obterTodos(): Contato[]{
    return this.lista_contatos;
  }

  public obterPorIndice(indice: number): Contato{
    return this.lista_contatos[indice];
  }

  public cadastrar(contato: Contato){
    this.lista_contatos.push(contato);
  }
}
