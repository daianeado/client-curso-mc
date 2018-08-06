import { Endereco } from "./endereco.domain";
import { Pedido } from "./pedido.domain";

export class Cliente {
    nome: string;
    email: string;
    cpfOuCnpj: string;
    tipo: number;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    telefone1: string;
    telefone2: string;
    telefone3: string;
    cidadeId: number;
    senha: string;
}