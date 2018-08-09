import { Injectable } from '@angular/core';
import { Cliente } from '../domains/cliente.domain';
import { HttpClient } from '@angular/common/http';
import { ClienteDTO } from '../domains/cliente.DTO';
import { Http } from '@angular/http';
import {ExportacaoUtilService} from "../util/services/exportacao-util.service";

@Injectable()
export class ClienteService {
    constructor(private http: HttpClient,
                private httpNew: Http) { }
    baseUrl: string = 'http://localhost:8080/clientes';

    cliente: Cliente;

    save(cliente: Cliente) {
        return this.http.post(this.baseUrl, cliente);
    }

    getAll(){
        return this.http.get<ClienteDTO[]>(this.baseUrl);
    }

    gerarPDF() : any{
        return ExportacaoUtilService.gerarPDF(this.baseUrl,'/pdf', null, this.httpNew);
    }
    gerarExcel(){
        return ExportacaoUtilService.gerarExcel(this.baseUrl, "/excel", null, this.httpNew);
    }

}