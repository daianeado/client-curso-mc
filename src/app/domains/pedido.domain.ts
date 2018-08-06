import { Pagamento } from "./pagamento.domain";
import { Cliente } from "./cliente.domain";
import { Endereco } from "./endereco.domain";
import { ItemPedido } from "./itemPedido.domain";

export class Pedido {
    id: number;
    instante: Date;
    pagamento: Pagamento;
    cliente: Cliente;
    enderecoDeEntrega: Endereco;
    itens: Set<ItemPedido>;

    constructor() {
        this.pagamento = new Pagamento();
        this.cliente = new Cliente();
        this.enderecoDeEntrega = new Endereco();
        this.itens = new Set<ItemPedido>();
    }
}