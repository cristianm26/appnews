import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }
  getNoticias(parametros: any): Observable<any> {
    const url = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais +'&category=&'+parametros.categoria+'&apiKey=9634f5b79d9848eab8ec8cd1d6e4b4b0';
    return this.http.get(url)
  }
}
