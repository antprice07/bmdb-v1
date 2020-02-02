import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-create',
  templateUrl: '../actor-maint-shared/actor-maint.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {
  title: string = "Actor-Create";
  actor: Actor = new Actor();
  submitBtnTitle:string = "Create";

  constructor(private actSvc: ActorService,
    private router: Router) { }

  ngOnInit() {
    //do nothing
  }

  save():void{
    this.actSvc.create(this.actor).subscribe(jr => {
      let err:string =jr.errors;
      if(err!=null){
        console.log(`Error creating actor: ${err}`);
      }
      this.router.navigateByUrl("/actors/list");
    });
  }

  backClicked():void{
    this.router.navigateByUrl("/actors/list");
  }

}