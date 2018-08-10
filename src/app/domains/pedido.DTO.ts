import { Pagamento } from "./pagamento.domain";
import { Cliente } from "./cliente.domain";
import { Endereco } from "./endereco.domain";

export class PedidoDTO {
    id: number;
    instante: string;
    pagamento: Pagamento;
    cliente: Cliente;
    enderecoDeEntrega: Endereco;
}