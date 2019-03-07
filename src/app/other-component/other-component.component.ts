import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-other-component',
  templateUrl: './other-component.component.html',
  styleUrls: ['./other-component.component.scss']
})
export class OtherComponentComponent implements OnInit {

  pokemonList;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon').subscribe(data => {
      this.pokemonList = data['results'];
      console.log(this.pokemonList);
    });
  }

}
