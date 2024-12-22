import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courosel',
  templateUrl: './courosel.component.html',
  styleUrls: ['./courosel.component.css']
})
export class CouroselComponent {
  constructor(private router:Router){}
  
  login():void{
    this.router.navigate(['/login'])

  }

}
