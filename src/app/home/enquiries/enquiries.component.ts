import { Component, OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/service/enquiry.service';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css']
})
export class EnquiriesComponent implements OnInit {

  constructor(public enquiryService:EnquiryService) { }
  enquiries=[]
  ngOnInit() {
    this.getEnquiries()
  }
getEnquiries(){
  this.enquiryService.getEnquiries().subscribe(res=>{
    this.enquiries=res;

  })
}
}
