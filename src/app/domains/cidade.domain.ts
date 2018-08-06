import { Estado } from "./estado.domain";

export class Cidade {
    id: number;
    nome: string;
    estado: Estado;

    constructor() {
        this.estado = new Estado();
    }
}