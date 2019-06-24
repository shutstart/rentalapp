import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RentalsComponent } from './home/rentals/rentals.component';
import { AddrentalComponent } from './home/addrental/addrental.component'
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './home/index/index.component';
import { SinglepropertyComponent } from './home/rentals/singleproperty/singleproperty.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EnquiriesComponent } from './home/enquiries/enquiries.component';
import { DropzoneDirective } from './dropzone.directive';
import { FileUploadComponent } from './home/rentals/file-upload/file-upload.component';
import { FileSizePipe } from './file-size.pipe';




@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    RentalsComponent,
    AddrentalComponent,
    IndexComponent,
    SinglepropertyComponent,
    ErrorComponent,
    HeaderComponent,
    EnquiriesComponent,
    DropzoneDirective,
    FileUploadComponent,
    FileSizePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot(
     { timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
