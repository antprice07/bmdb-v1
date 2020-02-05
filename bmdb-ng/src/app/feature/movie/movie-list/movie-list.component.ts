import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/model/movie.class';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent extends BaseComponent implements OnInit {
  movies: Movie[] = [];
  title: string = "Movie-List"


  constructor(private movSvc: MovieService) {
    super();
  }

  ngOnInit() {
    this.movSvc.list().subscribe(jr => {
      this.movies = jr.data as Movie[];
    }, err => console.log(err));
  }

  

}
