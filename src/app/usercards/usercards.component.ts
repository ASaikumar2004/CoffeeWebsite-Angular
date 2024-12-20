import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usercards',
  templateUrl: './usercards.component.html',
  styleUrls: ['./usercards.component.css']
})
export class UsercardsComponent {

  constructor(private router:Router) { }

  onclick():void{
    this.router.navigate(['/coffeesubcards']);
  }

  desserts():void{
    this.router.navigate(['/desserts']);
  }

}
