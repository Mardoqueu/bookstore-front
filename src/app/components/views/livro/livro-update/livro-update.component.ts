import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../../livros-read-all/livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  id_cat: String = ''

  livro: Livro = {
    id: '',
    title: '',
    name_author: '',
    text: '',
  }

  titulo = new FormControl('', [Validators.minLength(3)])
  nome_autor = new FormControl('', [Validators.minLength(3)])
  texto = new FormControl('', [Validators.minLength(10)])

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.livro.id = this.route.snapshot.paramMap.get('id')!;
  }


  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

  getMessage(){
    if(this.titulo.invalid){
      return 'O campo TITULO deve conter entre 3 e 100 caracteres';
    }

    if(this.nome_autor.invalid){
      return 'O campo AUTOR deve conter entre 3 e 100 caracteres';
    }

    if(this.texto.invalid){
      return 'O campo TEXTO deve conter entre 3 e 2000000 caracteres';
    }
    return false;
  }

}

