import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PedidoDTO } from '../domains/pedido.DTO';
import { ExportacaoUtil } from '../util/utilitarios/exportacao';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  listPedido: PedidoDTO[];

  displayedColumns: string[] = ['id','instante', 'cliente', 'endereco'];

  constructor(private pedidoService: PedidoService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.listPedido = [];
    this.pedidoService.getAll().subscribe(list => {
      this.listPedido = list;
    });
  }

  exportarPDF() {
    this.pedidoService.gerarPDF().subscribe(
      downloadUrl => {
        ExportacaoUtil.download(downloadUrl, "pedidos.pdf");
      },
      err => {
        this.toastrService.error('Erro ao exportar registros!', 'Exportação!');
      });
  }

  exportarExcel() {
    this.pedidoService.gerarExcel().subscribe(
      downloadUrl => {
        ExportacaoUtil.download(downloadUrl, "pedidos.xls");
      },
      err => {
        this.toastrService.error('Erro ao exportar registros!', 'Exportação!');
      });
  }

  imprimir() {
    this.pedidoService.gerarPDF().subscribe(
      downloadUrl => {
        ExportacaoUtil.imprimir(downloadUrl);
      },
      err => {
        this.toastrService.error('Erro ao exportar registros!', 'Exportação!');
      });
  }
}
