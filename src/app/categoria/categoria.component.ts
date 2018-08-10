import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoriaDTO } from '../domains/categoria.DTO';
import { CategoriaService } from './categoria.service';
import { ExportacaoUtil } from '../util/utilitarios/exportacao';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: CategoriaDTO;
  listCategoria: CategoriaDTO[];

  displayedColumns: string[] = ['id','nome'];

  constructor(private categoriaService: CategoriaService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.listCategoria = [];
    this.categoriaService.getAll().subscribe(list => {
      this.listCategoria = list;
    });
  }

  exportarPDF() {
    this.categoriaService.gerarPDF().subscribe(
      downloadUrl => {
        ExportacaoUtil.download(downloadUrl, "categorias.pdf");
      },
      err => {
        this.toastrService.error('Erro ao exportar registros!', 'Exportação!');
      });
  }

  exportarExcel() {
    this.categoriaService.gerarExcel().subscribe(
      downloadUrl => {
        ExportacaoUtil.download(downloadUrl, "categorias.xls");
      },
      err => {
        this.toastrService.error('Erro ao exportar registros!', 'Exportação!');
      });
  }

  imprimir() {
    this.categoriaService.gerarPDF().subscribe(
      downloadUrl => {
        ExportacaoUtil.imprimir(downloadUrl);
      },
      err => {
        this.toastrService.error('Erro ao exportar registros!', 'Exportação!');
      });
  }
}

