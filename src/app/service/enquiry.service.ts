import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { reference } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(public db:AngularFirestore,public authService:AuthService) { }
  addEnquiry(enquiry){
    return this.db.collection('enquiry').add(enquiry)
  }
  getEnquiries(){
    return this.db.collection('enquiry',ref=>ref.where('ownerEmail','==',this.authService.getEmail())).valueChanges()
  }
}
