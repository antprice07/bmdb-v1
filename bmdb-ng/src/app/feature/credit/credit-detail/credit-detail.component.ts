import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { Router, ActivatedRoute } from '@angular/router';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {
  title: string = "Actor-Detail"
  credit: Credit;
  id: number;

  constructor(private router: Router,
    private credSvc: CreditService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // get the movie id from the url
    this.route.params.subscribe(parms => this.id = parms["id"]);
    this.credSvc.getCredit(this.id).subscribe(jr => {
      this.credit = jr.data as Credit;
    });
  }

  delete() {
    this.credSvc.delete(this.id).subscribe(jr => {
      console.log("Actor delete jr:", jr);
      // Sean owes fix here to jr.  we will assume delete was successful
      if (jr.errors != null) {
        console.log("Error deleting credit: " + jr.errors);
      }
      this.router.navigateByUrl("/credits/list");
    });
  }
  edit() {
    this.router.navigateByUrl(`/credits/edit/${this.id}`);
  }

}