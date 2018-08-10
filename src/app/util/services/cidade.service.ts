import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Http } from "@angular/http";
import { Cidade } from "../../domains/cidade.domain";

@Injectable()
export class CidadeService {
    constructor(private http: HttpClient,
        private httpNew: Http) { }
    baseUrl: string = 'http://localhost:8080/cidades';

    getAll() {
        return this.http.get<Cidade[]>(this.baseUrl);
    }
}