import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsercardsComponent } from './usercards/usercards.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AboutmintComponent } from './aboutmint/aboutmint.component';
import { OurcoffeesComponent } from './ourcoffees/ourcoffees.component';
import { BlogComponent } from './blog/blog.component';
import { CouroselComponent } from './courosel/courosel.component';
import { FooterComponent } from './footer/footer.component';
import { AccodianComponent } from './accodian/accodian.component';
import { CoffeesubcardsComponent } from './coffeesubcards/coffeesubcards.component';
import { DessertsComponent } from './desserts/desserts.component';
import { SpecialsComponent } from './specials/specials.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Welcome1Component } from './welcome1/welcome1.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { Courosel1Component } from './courosel1/courosel1.component';

@NgModule({
  declarations: [
    AppComponent,
    UsercardsComponent,
    WelcomeComponent,
    NavbarComponent,
    LoginComponent,
    AboutmintComponent,
    OurcoffeesComponent,
    BlogComponent,
    CouroselComponent,
    FooterComponent,
    AccodianComponent,
    CoffeesubcardsComponent,
    DessertsComponent,
    SpecialsComponent,
    PagenotfoundComponent,
    Welcome1Component,
    Navbar1Component,
    Courosel1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
