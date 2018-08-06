import { Produto } from "./produto.domain";
import { Pedido } from "./pedido.domain";

export class ItemPedidoPK{
    pedido: Pedido;
    produto: Produto;

    constructor(){
        this.produto = new Produto();
        this.pedido = new Pedido();
    }
}