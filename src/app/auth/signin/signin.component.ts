import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { NavbarService } from 'src/app/service/navbar.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public auth:AuthService, public nav:NavbarService) { 
    this.auth.authDisable()
    this.nav.navbarDisable()
  }

  ngOnInit() {
  
  }

  signin(signinForm:NgForm){
    console.log(signinForm.value)
    this.auth.logIn(signinForm.value.email,signinForm.value.password)
    signinForm.reset()
  }
}
