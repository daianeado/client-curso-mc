import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CadastroClienteComponent } from './cliente/cadastro/cadastro-cliente.component';

const routes: Routes = [
  { path: 'categoria', component: CategoriaComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'cliente/novo', component: CadastroClienteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'produto', component: ProdutoComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
