import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // Estado sideBar menu mobile
  sideBarActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Mostrar sideBar menu mobile
  toggleSideBar() {
    this.sideBarActive = !this.sideBarActive;
  }

}
