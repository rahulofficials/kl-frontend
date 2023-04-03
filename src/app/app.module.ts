import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AlappuzhaComponent } from './alappuzha/alappuzha.component';
import { IdikkiComponent } from './idikki/idikki.component';
import { KannurComponent } from './kannur/kannur.component';
import { KasarkodComponent } from './kasarkod/kasarkod.component';
import { KollamComponent } from './kollam/kollam.component';
import { KottayamComponent } from './kottayam/kottayam.component';
import { MalapuramComponent } from './malapuram/malapuram.component';
import { KozhikodeComponent } from './kozhikode/kozhikode.component';
import { PalakadComponent } from './palakad/palakad.component';
import { ThrissurComponent } from './thrissur/thrissur.component';
import { PathanamthittaComponent } from './pathanamthitta/pathanamthitta.component';
import { ThiruvandrumComponent } from './thiruvandrum/thiruvandrum.component';
import { WayanadComponent } from './wayanad/wayanad.component';
import { ErnankulamComponent } from './ernankulam/ernankulam.component';
import { DistrictComponent } from './district/district.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    AlappuzhaComponent,
    IdikkiComponent,
    KannurComponent,
    KasarkodComponent,
    KollamComponent,
    KottayamComponent,
    MalapuramComponent,
    KozhikodeComponent,
    PalakadComponent,
    ThrissurComponent,
    PathanamthittaComponent,
    ThiruvandrumComponent,
    WayanadComponent,
    ErnankulamComponent,
    DistrictComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
