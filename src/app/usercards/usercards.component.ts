import { Component } from '@angular/core';
import { UsercardsService } from '../services/usercards.service';
import { Usercards } from '../models/usercards';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usercards',
  templateUrl: './usercards.component.html',
  styleUrls: ['./usercards.component.css']
})
export class UsercardsComponent {

  constructor(private route:Router) { }

  onclick(){
    this.route.navigate(['/coffeesubcards'])
  }

  desserts(){
    this.route.navigate(['/desserts'])
  }

}
