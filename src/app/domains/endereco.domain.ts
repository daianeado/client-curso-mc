import { Cliente } from "./cliente.domain";
import { Cidade } from "./cidade.domain";

export class Endereco {
    id: number;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    cliente: Cliente;
    cidade: Cidade;

    constructor() {
        this.cliente = new Cliente();
        this.cidade = new Cidade();
    }
}