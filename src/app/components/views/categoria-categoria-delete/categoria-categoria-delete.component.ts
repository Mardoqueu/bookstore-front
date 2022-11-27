import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private service: CategoriaService, private route: ActivatedRoute) { }

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

}
