import { Produto } from "./produto.domain";

export class Categoria {
    id: number;
    nome: string;
    produtos: Produto[];

    constructor() {
        this.produtos = [];
    }
}