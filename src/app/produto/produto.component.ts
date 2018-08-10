import { Component, OnInit } from '@angular/core';
import { ProdutoDTO } from '../domains/produto.DTO';
import { ToastrService } from 'ngx-toastr';
import { ProdutoService } from './produto.service';
import { ExportacaoUtil } from '../util/utilitarios/exportacao';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'preco'];
  listProduto: ProdutoDTO[];

  constructor(private toastrService: ToastrService,
    private produtoService: ProdutoService) { }

  ngOnInit() {
    this.listProduto = [];
    this.produtoService.getAll().subscribe(list => {
      this.listProduto = list;
    });
  }

  exportarPDF() {
    this.produtoService.gerarPDF().subscribe(
      downloadUrl => {
        ExportacaoUtil.download(downloadUrl, "produtos.pdf");
      },
      err => {
        this.toastrService.error('Erro ao exportar registros!', 'Exportação!');
      });
  }

  exportarExcel() {
    this.produtoService.gerarExcel().subscribe(
      downloadUrl => {
        ExportacaoUtil.download(downloadUrl, "produtos.xls");
      },
      err => {
        this.toastrService.error('Erro ao exportar registros!', 'Exportação!');
      });
  }

  imprimir() {
    this.produtoService.gerarPDF().subscribe(
      downloadUrl => {
        ExportacaoUtil.imprimir(downloadUrl);
      },
      err => {
        this.toastrService.error('Erro ao exportar registros!', 'Exportação!');
      });
  }


}
