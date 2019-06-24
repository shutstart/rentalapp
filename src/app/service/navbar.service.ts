import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
showNavbar=true;

  constructor() { }
  navbarDisable(){
    this.showNavbar = false;
  }

}
