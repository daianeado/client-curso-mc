import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ProdutoDTO } from '../domains/produto.DTO';
import { ExportacaoUtilService } from "../util/services/exportacao-util.service";

@Injectable()
export class ProdutoService {
    constructor(private http: HttpClient,
        private httpNew: Http) { }
    baseUrl: string = 'http://localhost:8080/produtos';

    getAll() {
        return this.http.get<ProdutoDTO[]>(this.baseUrl);
    }

    gerarPDF(): any {
        return ExportacaoUtilService.gerarPDF(this.baseUrl, '/pdf', null, this.httpNew);
    }
    gerarExcel() {
        return ExportacaoUtilService.gerarExcel(this.baseUrl, "/excel", null, this.httpNew);
    }
}