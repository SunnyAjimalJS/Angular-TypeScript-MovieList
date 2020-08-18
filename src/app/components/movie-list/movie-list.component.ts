import { Component, OnInit } from '@angular/core';
import { IMovie, exampleMovie, movies } from "src/assets/data/movies";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: IMovie[] = movies;
  constructor() { }

  ngOnInit() {
  }

}
