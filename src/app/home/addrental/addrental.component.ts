import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RentalService } from 'src/app/service/rental.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addrental',
  templateUrl: './addrental.component.html',
  styleUrls: ['./addrental.component.css']
})
export class AddrentalComponent implements OnInit {
  isPropertyAdded:boolean=false
  constructor(public rentalService:RentalService,public router:Router,public auth:AuthService,private toastr:ToastrService) { }

  ngOnInit() {
  }
  
  addProperty(addrentalform:NgForm){
    console.log(addrentalform.value)
    let ownerData
    let mobile
    let name
    let ownerEmail = this.auth.getEmail();
    this.auth.getData().subscribe(data=>{
      ownerData = data
      mobile = ownerData.mobile
      name = ownerData.name
      this.rentalService.addRental({ownerEmail,mobile,name,...addrentalform.value}).then(data=>{
        addrentalform.reset()
        this.toastr.success("Property was added successfully!")
      }).catch(err=>{
        this.toastr.error(err.message,"Error:");
      })  
    })
   

  }
}
