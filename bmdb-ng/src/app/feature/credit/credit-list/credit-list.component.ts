import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/service/credit.service';
import { Credit } from 'src/app/model/credit.class';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent extends BaseComponent implements OnInit {

  title: string= "Credit-List";
  credits: Credit[] = [];

  constructor(private credSvc: CreditService) {
    super();
  }

  ngOnInit() {
    this.credSvc.list().subscribe(jr => {
      this.credits = jr.data as Credit[];
       err=> console.log(jr.errors);
    }
    );
  }

}

