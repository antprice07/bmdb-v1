import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { Actor } from 'src/app/model/actor.class';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';
import { ActorService } from 'src/app/service/actor.service';
import { Credit } from 'src/app/model/credit.class';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credit-create',
  templateUrl: '../credit-maint-shared/credit-maint.component.html',
  styleUrls: ['./credit-create.component.css']
})
export class CreditCreateComponent implements OnInit {
  title: string = "Credit Create"
  movies:Movie[]=[];
  actors:Actor[]=[];
  credit: Credit = new Credit()
  submitBtnTitle: string = "Create";

  constructor(private credSvc: CreditService,
    private movSvc: MovieService,
    private actSvc: ActorService,
    private router: Router) { }

  ngOnInit() {
    this.movSvc.list().subscribe(jr => {
      this.movies = jr.data as Movie[];
      console.log(jr.errors);
    });

    this.actSvc.list().subscribe(jr => {
      this.actors = jr.data as Actor[];
      console.log(jr.errors);
    });
  }
  save():void{
    this.credSvc.create(this.credit).subscribe(jr => {
      let err:string =jr.errors;
      if(err!=null){
        console.log(`Error creating credit: ${err}`);
      }
      this.router.navigateByUrl("/credits/list");
    });
  }

  backClicked():void{
    window.history.go(-1);
  }

  //must include compareWith to share an html page with edit
  compMovie(a: Movie, b: Movie): boolean {
    return a && b && a.id === b.id;
  }
  compActor(a: Actor, b: Actor): boolean {
    return a && b && a.id === b.id;
  }

}
