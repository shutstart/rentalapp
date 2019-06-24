import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public router:Router,public auth: AuthService,public nav:NavbarService ) { 
    auth.showAuth=true;
    this.nav.navbarDisable()
  }

  ngOnInit() {
  }
  changeRoute(path){
    this.router.navigateByUrl(path)
  }
  showAuth(){
    return this.auth.showAuth
  }

}
