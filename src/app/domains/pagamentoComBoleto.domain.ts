import { Pagamento } from "./pagamento.domain";

export class PagamentoComBoleto extends Pagamento{
    dataVencimento: Date;
    dataPagamento: Date;
}