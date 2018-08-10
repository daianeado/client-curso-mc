import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClienteDTO } from '../domains/cliente.DTO';
import { ExportacaoUtil } from '../util/utilitarios/exportacao';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  listCliente: ClienteDTO[];

  displayedColumns: string[] = ['nome', 'email'];

  constructor(private clienteService: ClienteService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.listCliente = [];
    this.clienteService.getAll().subscribe(list => {
      this.listCliente = list;
    });
  }

  exportarPDF() {
    this.clienteService.gerarPDF().subscribe(
      downloadUrl => {
        ExportacaoUtil.download(downloadUrl, "clientes.pdf");
      },
      err => {
        this.toastrService.error('Erro ao exportar registros!', 'Exportação!');
      });
  }

  exportarExcel() {
    this.clienteService.gerarExcel().subscribe(
      downloadUrl => {
        ExportacaoUtil.download(downloadUrl, "clientes.xls");
      },
      err => {
        this.toastrService.error('Erro ao exportar registros!', 'Exportação!');
      });
  }

  imprimir() {
    this.clienteService.gerarPDF().subscribe(
      downloadUrl => {
        ExportacaoUtil.imprimir(downloadUrl);
      },
      err => {
        this.toastrService.error('Erro ao exportar registros!', 'Exportação!');
      });
  }
}
