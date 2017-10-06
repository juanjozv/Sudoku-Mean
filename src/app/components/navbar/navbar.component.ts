import { Component, OnInit } from '@angular/core';
import * as NavbarView from './navbarView';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NavbarView]
})
export class NavbarComponent implements OnInit {
  _navbarView: any = new NavbarView();
  constructor() { }

  ngOnInit() {
  }

  

}
