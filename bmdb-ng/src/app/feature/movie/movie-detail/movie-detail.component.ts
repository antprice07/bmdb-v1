import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/model/movie.class';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  title: string = "Movie-Detail"
  movie: Movie;
  id:number;

  constructor(private router:Router, 
    private movSvc:MovieService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    // get the movie id from the url
    this.route.params.subscribe(parms => this.id = parms["id"]);
    this.movSvc.getMovie(this.id).subscribe( jr => {
      this.movie = jr.data as Movie;
    });
  }

  delete(){
    this.movSvc.delete(this.id).subscribe(jr => {
      console.log("movie delete jr:",jr);
      // Sean owes fix here to jr.  we will assume delete was successful
      if (jr.errors != null) {
        console.log("Error deleting movie: "+jr.errors);
      }
      this.router.navigateByUrl("movies/list");
    });
  }
  edit(){
    this.router.navigateByUrl(`/movies/edit/${this.id}`);
  }

}
