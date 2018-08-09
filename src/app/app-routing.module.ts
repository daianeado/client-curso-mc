import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { CadastroCategoriaComponent } from './categoria/cadastro-categoria/cadastro-categoria.component';
import { CadastroPedidoComponent } from './pedido/cadastro-pedido/cadastro-pedido.component';

const routes: Routes = [
  { path: 'categoria', component: CategoriaComponent },
  { path: 'categoria/novo', component: CadastroCategoriaComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'cliente/novo', component: CadastroClienteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'pedido/novo', component: CadastroPedidoComponent },
  { path: 'produto', component: ProdutoComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
