import { Component } from '@angular/core';
import { UsercardsService } from '../services/usercards.service';
import { Usercards } from '../models/usercards';

@Component({
  selector: 'app-coffeesubcards',
  templateUrl: './coffeesubcards.component.html',
  styleUrls: ['./coffeesubcards.component.css']
})
export class CoffeesubcardsComponent {
  cards:Usercards[]=[]
  constructor(private service:UsercardsService){
  }
  
  ngOnInit():void{
    this.service.getall().subscribe(data=>this.cards=data)
  }

}
