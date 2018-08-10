import { Injectable } from '@angular/core';
import { Cliente } from '../domains/cliente.domain';
import { HttpClient } from '@angular/common/http';
import { ClienteDTO } from '../domains/cliente.DTO';
import { Http } from '@angular/http';
import { ExportacaoUtilService } from "../util/services/exportacao-util.service";
import { CategoriaDTO } from '../domains/categoria.DTO';

@Injectable()
export class CategoriaService {
    constructor(private http: HttpClient,
        private httpNew: Http) { }
    baseUrl: string = 'http://localhost:8080/categorias';

    categoria: CategoriaDTO;

    save(categoria: CategoriaDTO) {
        return this.http.post(this.baseUrl, categoria);
    }

    getAll() {
        return this.http.get<CategoriaDTO[]>(this.baseUrl);
    }

    gerarPDF(): any {
        return ExportacaoUtilService.gerarPDF(this.baseUrl, '/pdf', null, this.httpNew);
    }
    gerarExcel() {
        return ExportacaoUtilService.gerarExcel(this.baseUrl, "/excel", null, this.httpNew);
    }

}