import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-botoes-exportacao',
  templateUrl: './botoes-exportacao.component.html',
  styleUrls: ['./botoes-exportacao.component.css']
})
export class BotoesExportacaoComponent implements OnInit {

  @Input() tabela: any;
  @Output() exportarPDFFunction: EventEmitter<any> = new EventEmitter();
  @Output() exportarExcelFunction: EventEmitter<any> = new EventEmitter();
  @Output() imprimirFunction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  exportarPDF() {
    this.exportarPDFFunction.emit();
  }

  exportarExcel() {
    this.exportarExcelFunction.emit();
  }

  imprimir() {
    this.imprimirFunction.emit();
  }

}
