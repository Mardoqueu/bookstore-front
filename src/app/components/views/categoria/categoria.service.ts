import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  //Read
  findAll():Observable<Categoria[]> {
    const url = `${this.baseUrl}/category`
    return this.http.get<Categoria[]>(url)
  }

  findById(id: String): Observable<Categoria>{
    const url = `${this.baseUrl}/category/${id}`
    return this.http.get<Categoria>(url)
  }

  //Create
  create(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/category`
    return this.http.post<Categoria>(url, categoria);
  }

  //delete
  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}/category/${id}`
    return this.http.delete<void>(url)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}