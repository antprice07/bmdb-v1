import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent extends BaseComponent implements OnInit {

  title:string = "Actor-List";
  actors: Actor[] = [];

  constructor(private actSvc:ActorService) {
    super();
  }

  ngOnInit() {
    this.actSvc.list().subscribe(jr => {
      this.actors = jr.data as Actor[];
       err=> console.log(jr.errors);
    }
    );
  }

}
