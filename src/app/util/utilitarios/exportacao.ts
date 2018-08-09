export class ExportacaoUtil {
    static PDF: string = 'application/pdf';

    static EXCEL: string = 'application/vnd.ms-excel';

    public static download(downloadUrl, filename) {
        let a: any = document.createElement("a");
        a.style = "display: none";
        a.href = downloadUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
    }

    public static imprimir(downloadUrl) {
        var frame: any = document.createElement('iframe');
        frame.style = "display: none";
        frame.src = downloadUrl;
        document.body.appendChild(frame);
        frame.onload = function () {
            frame.contentWindow.focus();
            frame.contentWindow.print();
        };
    }
}