import { Cidade } from "./cidade.domain";

export class Estado {
    id: number;
    nome: string;
    cidades: Cidade[];

    constructor() {
        this.cidades = [];
    }
}