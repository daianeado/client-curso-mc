import { Headers, RequestOptions, ResponseContentType, Http } from "@angular/http";
import { map } from "rxjs/operators";

export class ExportacaoUtilService {

    static PDF = 'application/pdf';
    static EXCEL = 'application/vnd.ms-excel';

    private static getOptions(): RequestOptions {
        const headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const options: RequestOptions = new RequestOptions({ headers: headers });
        options.responseType = ResponseContentType.Blob;
        return options;
    }

    static gerarPDF(endpoint: string, url: string, filtro: any, http: Http): any {
        return ExportacaoUtilService.gerar(endpoint, url, filtro, ExportacaoUtilService.PDF, http);
    }

    static gerarExcel(endpoint: string, url: string, filtro: any, http: Http): any {
        return ExportacaoUtilService.gerar(endpoint, url, filtro, ExportacaoUtilService.EXCEL, http);
    }

    static gerar(endpoint: string, url: string, filtro: any, tipo: string, http: Http): any {
        return http.post(endpoint.concat(url), filtro, ExportacaoUtilService.getOptions()).pipe(
            map((result: any) => {
                let file = new Blob([result.blob()], { type: tipo });
                return URL.createObjectURL(file);
            }));
    }

    constructor() { }
}
