import { NgModule, Component } from '@angular/core';
import { MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRadioButton, MatRadioModule, MatSelectModule, MatDividerModule, MatListModule, MatButtonModule, MatTabsModule, MatTableModule, MatMenuModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProdutoComponent } from './produto/produto.component';
import { FormsModule } from '@angular/forms';
import { ClienteService } from './cliente/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BotoesExportacaoComponent } from './botoes-exportacao/botoes-exportacao.component';
import { HttpModule } from '@angular/http';
import { MenuComponent } from './menu/menu.component';
import { CadastroCategoriaComponent } from './categoria/cadastro-categoria/cadastro-categoria.component';
import { CadastroPedidoComponent } from './pedido/cadastro-pedido/cadastro-pedido.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { CategoriaService } from './categoria/categoria.service';
import { ProdutoService } from './produto/produto.service';
import { PedidoService } from './pedido/pedido.service';
import { CidadeService } from './util/services/cidade.service';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProdutoComponent,
    PedidoComponent,
    CategoriaComponent,
    HomeComponent,
    CadastroClienteComponent,
    BotoesExportacaoComponent,
    MenuComponent,
    CadastroCategoriaComponent,
    CadastroPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 15000
    }),
    MatTableModule,
    HttpModule,
    MatMenuModule
  ],
  providers: [ClienteService, CategoriaService, ProdutoService, PedidoService, CidadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

