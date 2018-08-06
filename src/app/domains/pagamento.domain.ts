import { Pedido } from "./pedido.domain";

export class Pagamento {
    id: number;
    estado: number;
    pedido: Pedido;

    constructor() {
        this.pedido = new Pedido();
    }
}