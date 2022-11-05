import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  API_URL = 'https://rickandmortyapi.com/api';

  // Obtener personajes
  getCharacters() {
    return this.http.get<Data>(`${this.API_URL}/character`);
  }
}
