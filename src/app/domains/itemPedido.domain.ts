import { ItemPedidoPK } from "./itemPedidoPk.domain";

export class ItemPedido {
    id: ItemPedidoPK;
    desconto: number;
    quantidade: number;
    preco: number;

    constructor() {
        this.id = new ItemPedidoPK();
    }
}