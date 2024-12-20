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
    DessertsComponent
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
