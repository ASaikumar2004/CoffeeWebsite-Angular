import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutmintComponent } from './aboutmint/aboutmint.component';
import { OurcoffeesComponent } from './ourcoffees/ourcoffees.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { CoffeesubcardsComponent } from './coffeesubcards/coffeesubcards.component';
import { DessertsComponent } from './desserts/desserts.component';
import { SpecialsComponent } from './specials/specials.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Welcome1Component } from './welcome1/welcome1.component';

const routes: Routes = [
  // default routing
  {path:'',component:WelcomeComponent},
  // normal routing
  {path:'welcome',component:WelcomeComponent},
  {path:'welcome1',component:Welcome1Component},
  {path:'aboutmint',component:AboutmintComponent},
  {path:'ourcoffees',component:OurcoffeesComponent},
  {path:'blog',component:BlogComponent},
  {path:'login',component:LoginComponent},

  // subcards routing components
  {path:'coffeesubcards',component:CoffeesubcardsComponent},
  { path:'desserts',component:DessertsComponent},
  {path:'specials',component:SpecialsComponent},
  {path:'login',component:LoginComponent},

  // wildcard routing
  { path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
