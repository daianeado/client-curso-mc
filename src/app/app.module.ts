import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProdutoComponent,
    PedidoComponent,
    CategoriaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

