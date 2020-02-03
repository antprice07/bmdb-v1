import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/service/credit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Credit } from 'src/app/model/credit.class';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { ActorService } from 'src/app/service/actor.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-report-credit',
  templateUrl: './report-credit.component.html',
  styleUrls: ['./report-credit.component.css']
})

export class ReportCreditComponent implements OnInit {

  title: string = "Detailed Credits";
  credits: Credit[] = [];
  movie: Movie = new Movie();
  movies: Movie[] = [];
  creditedActors: any[] = [];
  id: number = 0;


  constructor(private credSvc: CreditService,
    private router: Router,
    private movSvc: MovieService,
    private actSvc: ActorService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms["id"]);
    this.movSvc.getMovie(this.id).subscribe(jr => {
      this.movie = jr.data as Movie;
      this.getCreditedActors(this.movie.id);
    });
    this.movSvc.list().subscribe(jr => {
      this.movies = jr.data as Movie[];
    });
  }
  compMovie(a: Movie, b: Movie): boolean {
    return a && b && a.id === b.id;
  }
  getCreditedActors(id: number) {
    this.creditedActors = [];
    this.credSvc.getByMovie(id).subscribe(res => {
      this.credits = res.data as Credit[];
      for (let c of this.credits) {
        this.creditedActors.push({ actor: c.actor, role: c.role });
        console.log(this.creditedActors)
      }
    })
  }



}

