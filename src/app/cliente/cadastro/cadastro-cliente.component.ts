import { Component, OnInit } from '@angular/core';
import { Cidade } from '../../domains/cidade.domain';
import { Cliente } from '../../domains/cliente.domain';
import { ClienteService } from '../cliente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cidades: Cidade[] = [];
  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.cidades = [
      { id: 1, nome: "Uberlândia", estado: null },
      { id: 2, nome: "São Paulo", estado: null },
      { id: 3, nome: "Campinas", estado: null },
    ];
  }

  salvar() {
    //fazer validações
    this.cliente.senha = "123";
    this.clienteService.save(this.cliente).subscribe(cliente => {
      console.log(cliente);
      this.toastrService.success("Cliente salvo com sucesso!");
    });
  }

}
