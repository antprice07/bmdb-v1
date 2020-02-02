import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';

@Component({
  selector: 'app-movie-edit',
  templateUrl: '../movie-maint-shared/movie-maint.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  title: string = "Movie-Edit";
  movie: Movie;
  
  submitBtnTitle: string = "Update";
  id: number;

  constructor(private movSvc: MovieService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms["id"]);
    this.movSvc.getMovie(this.id).subscribe(jr => {
      this.movie = jr.data as Movie;
    });
  }

  save(): void {
    this.movSvc.edit(this.movie).subscribe(jr => {
      let err: string = jr.errors;
      if (err != null) {
        console.log(`Error updating movie: ${err}`);
      }
      this.router.navigateByUrl("/movies/list");
    });
  }

  backClicked(): void {
    this.router.navigateByUrl("/movies/list");
  }
}
