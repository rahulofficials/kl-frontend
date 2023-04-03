import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlappuzhaComponent } from './alappuzha/alappuzha.component';
import { DistrictComponent } from './district/district.component';
import { ErnankulamComponent } from './ernankulam/ernankulam.component';
import { HomeComponent } from './home/home.component';
import { IdikkiComponent } from './idikki/idikki.component';
import { KannurComponent } from './kannur/kannur.component';
import { KasarkodComponent } from './kasarkod/kasarkod.component';
import { KollamComponent } from './kollam/kollam.component';
import { KottayamComponent } from './kottayam/kottayam.component';
import { KozhikodeComponent } from './kozhikode/kozhikode.component';
import { LoginformComponent } from './loginform/loginform.component';
import { MalapuramComponent } from './malapuram/malapuram.component';
import { PalakadComponent } from './palakad/palakad.component';
import { PathanamthittaComponent } from './pathanamthitta/pathanamthitta.component';
import { SignupComponent } from './signup/signup.component';
import { ThiruvandrumComponent } from './thiruvandrum/thiruvandrum.component';
import { ThrissurComponent } from './thrissur/thrissur.component';
import { WayanadComponent } from './wayanad/wayanad.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"district",component:DistrictComponent},
  {path:"signUp",component:SignupComponent},
  {path:"login",component:LoginformComponent},
  {path:"alappuzha",component:AlappuzhaComponent},
  {path:"idikki",component:IdikkiComponent},
  {path:"kannur",component:KannurComponent},
  {path:"kasargod",component:KasarkodComponent},
  {path:"kollam",component:KollamComponent},
  {path:"kottayam",component:KottayamComponent},
  {path:"kozhikode",component:KozhikodeComponent},
  {path:"mallapuram",component:MalapuramComponent},
  {path:"palakad",component:PalakadComponent},
  {path:"pathanamthitta",component:PathanamthittaComponent},
  {path:"thiruvandrum",component:ThiruvandrumComponent},
  {path:"thrissur",component:ThrissurComponent},
  {path:"wayanad",component:WayanadComponent},
  {path:"ernakulam",component:ErnankulamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
