import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Pedido } from '../domains/pedido.domain';
import { PedidoDTO } from '../domains/pedido.DTO';
import { ExportacaoUtilService } from "../util/services/exportacao-util.service";

@Injectable()
export class PedidoService {
    constructor(private http: HttpClient,
        private httpNew: Http) { }
    baseUrl: string = 'http://localhost:8080/pedidos';

    save(pedido: Pedido) {
        return this.http.post(this.baseUrl, pedido);
    }

    getAll() {
        return this.http.get<PedidoDTO[]>(this.baseUrl);
    }

    gerarPDF(): any {
        return ExportacaoUtilService.gerarPDF(this.baseUrl, '/pdf', null, this.httpNew);
    }
    gerarExcel() {
        return ExportacaoUtilService.gerarExcel(this.baseUrl, "/excel", null, this.httpNew);
    }
}