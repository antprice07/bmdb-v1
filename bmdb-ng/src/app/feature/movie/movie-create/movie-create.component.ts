import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: '../movie-maint-shared/movie-maint.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  title: string = "Movie-Create";
  movie: Movie = new Movie();
  submitBtnTitle:string = "Create";

  constructor(private movSvc: MovieService,
    private router: Router) { }

  ngOnInit() {
    //do nothing
  }

  save():void{
    this.movSvc.create(this.movie).subscribe(jr => {
      let err:string =jr.errors;
      if(err!=null){
        console.log(`Error creating movie: ${err}`);
      }
      this.router.navigateByUrl("/movies/list");
    });
  }

  backClicked():void{
    this.router.navigateByUrl("/movies/list");
  }

}
