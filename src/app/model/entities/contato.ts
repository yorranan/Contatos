import { Genero } from "../enumerates/genero";

export class Contato{
    private _id!: string;
    private _nome: string;
    private _telefone: number;
    private _email: string;
    private _genero: Genero;


    constructor(nome: string, telefone: number, email: string, genero: Genero){
        this._nome = nome;
        this._telefone = telefone;
        this._email = email;
        this._genero = genero;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get nome(): string{
        return this._nome;
    }
    public get telefone(): number{
        return this._telefone;
    }
    public get email(): string{
        return this._email;
    }
    public get genero(): Genero{
        return this._genero;
    }
    public set nome(value: string){
        this._nome = value;
    }
    public set telefone(value: number){
        this._telefone = value;
    }
    public set email(value: string){
        this._email = value;
    }
    public set genero(value: Genero){
        this._genero = value;
    }
}