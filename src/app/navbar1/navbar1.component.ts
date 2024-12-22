import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component {

  constructor(private router:Router){

  }

  welcome():void{
    this.router.navigate(['/welcome']);
  }

}
