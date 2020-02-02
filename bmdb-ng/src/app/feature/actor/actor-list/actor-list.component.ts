import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  title:string = "Actor-List";
  actors: Actor[] = [];

  constructor(private actSvc:ActorService) { }

  ngOnInit() {
    this.actSvc.list().subscribe(jr => {
      this.actors = jr.data as Actor[];
       err=> console.log(jr.errors);
    }
    );
  }

}
