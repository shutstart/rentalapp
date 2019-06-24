import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  showAuth=true;
  userDetails=null;
  constructor(public FirebaseAuth: AngularFireAuth,public db:AngularFirestore, public router:Router,public toastr:ToastrService) { 
this.FirebaseAuth.authState.subscribe(user=>{
  if(user){
    this.userDetails= user;
  }
})
  }
  logIn(email, password){
    this.FirebaseAuth.auth.signInWithEmailAndPassword(email, password).then(data=>{
      this.userDetails = data;
      this.router.navigateByUrl('/home')
    }).catch(err=>{
      this.toastr.error(err.message,"Error:");
      

    })
  }
  signUp(email,password,mobile,dob,name){
    this.FirebaseAuth.auth.createUserWithEmailAndPassword(email,password).then(data=>{
      this.userDetails = data;
      this.db.collection('users').doc(data.user.uid).set({
        mobile: mobile,
        dob: dob,
        name: name,
      })
      this.router.navigateByUrl('/auth/signin')
    }).catch(err=>{
    
      this.toastr.error(err.message,"Error:");

    })
  }
  authDisable(){
    this.showAuth=false
  }
  isAuthenticated(){
    if(this.userDetails){
      return true;
    }
    else{
      return false;
    }
  }
  getEmail(){
    return this.userDetails.user.email;
    
  }
  getData(){
    return this.db.collection('users').doc(this.userDetails.user.uid).valueChanges()
  }
}
