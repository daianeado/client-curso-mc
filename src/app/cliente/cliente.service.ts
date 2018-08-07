import { Injectable } from '@angular/core';
import { Cliente } from '../domains/cliente.domain';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService {
    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:8080/clientes';

    cliente: Cliente;

    save(cliente: Cliente) {
        return this.http.post(this.baseUrl, cliente);
    }

}