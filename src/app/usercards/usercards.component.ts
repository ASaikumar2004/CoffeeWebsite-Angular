import { Component } from '@angular/core';
import { UsercardsService } from '../services/usercards.service';
import { Usercards } from '../models/usercards';

@Component({
  selector: 'app-usercards',
  templateUrl: './usercards.component.html',
  styleUrls: ['./usercards.component.css']
})
export class UsercardsComponent {
  records: Usercards[] = [];
  constructor(private service: UsercardsService) { }

  ngOnInit(): void {
    this.service.getall().subscribe(data => this.records = data)
  }

  onclick(){
    
  }

}
