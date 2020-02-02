import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];


  constructor() { }

  ngOnInit() {
    this.menuItems = [
      new MenuItem("Movie","/movies/list","Movie List"),
      new MenuItem("Actor","/actors/list","Actor List"),
      new MenuItem("Credit","/credits/list","Credit List")
    ]
  }

}
