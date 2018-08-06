import { Pagamento } from "./pagamento.domain";

export class PagamentoComCartao extends Pagamento {
    numeroDeParcelas: number;
}