import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RentalsComponent } from './home/rentals/rentals.component';
import { AddrentalComponent } from './home/addrental/addrental.component';
import { IndexComponent } from './home/index/index.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { AuthguardService } from './service/authguard.service';
import { HomeComponent } from './home/home.component';
import { EnquiriesComponent } from './home/enquiries/enquiries.component';

const routes: Routes = [
  {path: '', component: HomeComponent,canActivate:[AuthguardService]},
  {path:'home' , canActivate:[AuthguardService], component:HomeComponent,
    children:[
    {path: '', component:IndexComponent},
    {path:'allproperties' , component:RentalsComponent},
    {path:'addproperty' , component:AddrentalComponent},
    {path:'enquiries' , component:EnquiriesComponent}
  ]},
/*   {path:'auth/signin' , component:SigninComponent },
  {path:'auth/signup' , component:SignupComponent }, */
  
  { path: 'auth', component: AuthComponent,children:[
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent }
  ] },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
