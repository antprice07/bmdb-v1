import { Component, OnInit } from '@angular/core';

@Component({
  template: ''
})
export class BaseComponent implements OnInit {

  sortColumn: string = 'id';
  ascOrder: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  sort(column: string): void {
    if(this.sortColumn === column) {
      this.ascOrder = !this.ascOrder;
      return;
    }
    this.ascOrder = true;
    this.sortColumn = column;
  }
}
