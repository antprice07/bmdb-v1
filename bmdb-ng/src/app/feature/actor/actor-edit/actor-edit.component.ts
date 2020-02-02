import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actor-edit',
  templateUrl: '../actor-maint-shared/actor-maint.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  title: string = "Actor-Edit";
  actor: Actor;
  
  submitBtnTitle: string = "Update";
  id: number;

  constructor(private actSvc: ActorService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms["id"]);
    this.actSvc.getActor(this.id).subscribe(jr => {
      this.actor = jr.data as Actor;
    });
  }

  save(): void {
    this.actSvc.edit(this.actor).subscribe(jr => {
      let err: string = jr.errors;
      if (err != null) {
        console.log(`Error updating actor: ${err}`);
      }
      this.router.navigateByUrl("/actors/list");
    });
  }

  backClicked(): void {
    this.router.navigateByUrl("/actors/list");
  }
}
