import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavbarService } from 'src/app/service/navbar.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public auth:AuthService,public db:AngularFirestore,public nav: NavbarService,public toastr:ToastrService) { 
    this.nav.navbarDisable()
    this.auth.authDisable()
  }
  
  ngOnInit() {    }
  signup(signupForm:NgForm){
    console.log(signupForm.value)
   this.auth.signUp(signupForm.value.email,signupForm.value.password,signupForm.value.mobile,signupForm.value.dob,signupForm.value.name)
   signupForm.reset()
   this.toastr.success("Signed Up Succesfully!")
}
}
 




