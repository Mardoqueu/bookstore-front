import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros-read-all',
  templateUrl: './livros-read-all.component.html',
  styleUrls: ['./livros-read-all.component.css']
})
export class LivrosReadAllComponent implements OnInit {

  displayedColumns: string[] = ["id", "titulo", "livros", "acoes"];

  constructor() { }

  ngOnInit(): void {
  }

}
