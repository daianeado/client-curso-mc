import { Component, OnInit } from '@angular/core';
import { CategoriaDTO } from '../../domains/categoria.DTO';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent implements OnInit {

  categoria: CategoriaDTO = new CategoriaDTO();
  constructor(private categoriaService: CategoriaService,
    private toastrService: ToastrService) { }

  ngOnInit() {
  }

  salvar() {
    //fazer validações
    this.categoriaService.save(this.categoria).subscribe(cliente => {
      this.toastrService.success("Categoria salva com sucesso!");
    });
  }

}
