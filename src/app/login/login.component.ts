import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formgroup!:FormGroup;
  constructor(private router:Router,private fb:FormBuilder){
    this.formgroup=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]]
    });
  }

  onsubmit(){
    if(this.formgroup.valid){
      this.router.navigate(['/welcome1'])
    }
    else{
      this.router.navigate(['/login'])
    }
  }

  welcome1():void{
     this.router.navigate(['/welcome1']);
  }

}
