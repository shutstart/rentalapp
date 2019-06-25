import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { EnquiryService } from 'src/app/service/enquiry.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-singleproperty',
  templateUrl: './singleproperty.component.html',
  styleUrls: ['./singleproperty.component.css']
})
export class SinglepropertyComponent implements OnInit {
  @Input('property') property
  showForm:boolean=false  
  constructor(public authService:AuthService,public enquiryService:EnquiryService,public toastr:ToastrService,public storage:AngularFireStorage) { }
  image:any
  ngOnInit() {
    this.image = this.storage.ref(this.property.image).getDownloadURL()
    console.log(this.image)
  }

  sendEnquiry(enquiryForm:NgForm){
    let title = this.property.title
    let timestamp=new Date()
    let id = this.property.id;
    let ownerEmail = this.property.ownerEmail
    let email = this.authService.getEmail()
    if(email != ownerEmail){
      this.enquiryService.addEnquiry({ownerEmail,email,timestamp,id,title,...enquiryForm.value}).then(data=>{
        enquiryForm.reset()
        this.showForm=false
        this.toastr.success("Enquiry Sent Sucessfully!")
      }).catch(err=>{
        this.toastr.error(err.message,"Error:")

      })
      
    }
    else{
      this.toastr.error("You Cannot enquire for your own property!")
      this.showForm = false;
    }
   

  }

}
