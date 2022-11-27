import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria/categoria.model';
import { CategoriaService } from '../categoria/categoria.service';

@Component({
  selector: 'app-categoria-categoria-delete',
  templateUrl: './categoria-categoria-delete.component.html',
  styleUrls: ['./categoria-categoria-delete.component.css']
})
export class CategoriaCategoriaDeleteComponent implements OnInit {

  category: Categoria = {
    id: '',
    name: '',
    description: ''
  }

  constructor(private service: CategoriaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
  this.service.findById(this.category.id!).subscribe((resposta) => {
    this.category.name = resposta.name
    this.category.description = resposta.description
    console.log(resposta);
  })
  }

  delete(): void {
    this.service.delete(this.category.id!).subscribe((resposta) => {
      this.router.navigate(['categorias']);
      this.service.mensagem('Categoria deletada com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void{
    this.router.navigate(['categorias']);
  }

}
