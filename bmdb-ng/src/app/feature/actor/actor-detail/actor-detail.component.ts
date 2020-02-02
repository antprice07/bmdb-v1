import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { Router, ActivatedRoute } from '@angular/router';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  title: string = "Actor-Detail"
  actor: Actor;
  id: number;

  constructor(private router: Router,
    private actSvc: ActorService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // get the movie id from the url
    this.route.params.subscribe(parms => this.id = parms["id"]);
    this.actSvc.getActor(this.id).subscribe(jr => {
      this.actor = jr.data as Actor;
    });
  }

  delete() {
    this.actSvc.delete(this.id).subscribe(jr => {
      console.log("Actor delete jr:", jr);
      // Sean owes fix here to jr.  we will assume delete was successful
      if (jr.errors != null) {
        console.log("Error deleting actor: " + jr.errors);
      }
      this.router.navigateByUrl("/actors/list");
    });
  }
  edit() {
    this.router.navigateByUrl(`/actors/edit/${this.id}`);
  }

}

