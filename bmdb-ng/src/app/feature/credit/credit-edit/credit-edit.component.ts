import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { ActorService } from 'src/app/service/actor.service';
import { Movie } from 'src/app/model/movie.class';
import { Actor } from 'src/app/model/actor.class';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-edit',
  templateUrl: '../credit-maint-shared/credit-maint.component.html',
  styleUrls: ['./credit-edit.component.css']
})
export class CreditEditComponent implements OnInit {
  title: string = "Credit-Edit";
  credit: Credit;
  movies: Movie[] = [];
  actors: Actor[] = [];

  submitBtnTitle: string = "Update";
  id: number;

  constructor(private credSvc: CreditService,
    private route: ActivatedRoute,
    private router: Router,
    private movSvc: MovieService,
    private actSvc: ActorService) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms["id"]);
    this.credSvc.getCredit(this.id).subscribe(jr => {
      this.credit = jr.data as Credit;
      this.movSvc.list().subscribe(jres => {
        this.movies = jres.data as Movie[];
      });
      this.actSvc.list().subscribe(jres => {
        this.actors = jres.data as Actor[];
      });
    });
  }

  save(): void {
    this.credSvc.edit(this.credit).subscribe(jr => {
      let err: string = jr.errors;
      if (err != null) {
        console.log(`Error updating credit: ${err}`);
      }
      this.router.navigateByUrl("/credits/list");
    });
  }

  backClicked(): void {
    this.router.navigateByUrl("/credits/list");
  }

  compMovie(a: Movie, b: Movie): boolean {
    return a && b && a.id === b.id;
  }
  compActor(a: Actor, b: Actor): boolean {
    return a && b && a.id === b.id;
  }
}
