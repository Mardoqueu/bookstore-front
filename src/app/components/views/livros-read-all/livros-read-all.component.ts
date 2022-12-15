import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro/livro.service';
import { Livro } from './livro.model';

@Component({
  selector: 'app-livros-read-all',
  templateUrl: './livros-read-all.component.html',
  styleUrls: ['./livros-read-all.component.css']
})
export class LivrosReadAllComponent implements OnInit {

  displayedColumns: string[] = ["id", "titulo", "livros", "acoes"];

  id_cat: String = ""

  livros: Livro[] = []

  constructor(
    private service: LivroService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta) => {
      this.livros = resposta;
      console.log(this.livros)
    })
  }

  navegarParaCriarLivro(): void {
    this.router.navigate([`categorias/${this.id_cat}/livros/create`])
  }

}
