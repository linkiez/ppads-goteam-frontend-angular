import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Categoria, Categorias } from '../models/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Categorias> {
    return this.http.get<Categorias>(environment.BACKEND_HOST + 'categorias', {
      responseType: 'json',
    });
  }

  getCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(
      environment.BACKEND_HOST + 'categoria/id/' + id,
      {
        responseType: 'json',
      }
    );
  }

  addCategoria(Categoria: Categoria): Observable<Object> {
    return this.http.post(environment.BACKEND_HOST + 'categoria', Categoria, {
      responseType: 'json',
    });
  }

  updateCategoria(Categoria: Categoria): Observable<Object> {
    return this.http.post(
      environment.BACKEND_HOST + 'categoria/id' + Categoria.id,
      Categoria,
      {
        responseType: 'json',
      }
    );
  }

  deleteCategoria(Categoria: Categoria): Observable<Object> {
    return this.http.delete(
      environment.BACKEND_HOST + 'categoria/id/' + Categoria.id,
      {
        responseType: 'json',
      }
    );
  }
}
