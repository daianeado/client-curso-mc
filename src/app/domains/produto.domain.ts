import { Categoria } from "./categoria.domain";
import { ItemPedido } from "./itemPedido.domain";

export class Produto {
    id: number;
	nome: string;
	preco: number;
	categorias: Categoria[];
    itens:Set<ItemPedido>;
    
    constructor(){
        this.categorias = [];
        this.itens = new Set<ItemPedido>();
    }
}