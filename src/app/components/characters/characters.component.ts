import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Data } from 'src/app/models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  // Almacenar datos de la respuesta de la API
  data: Data = {
    info: {
      count: 0,
      next: '',
      pages: 0,
      prev: null
    },
    results: []
  }
  a = 'holi'
  charactersData = this.data.results;

  ngOnInit(): void {
    this.apiService.getCharacters()
    .subscribe(response => {
      this.data = response;
      console.log(this.data.results);
    });
  }

}
