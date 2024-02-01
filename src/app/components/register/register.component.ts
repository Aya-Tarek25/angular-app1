import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IRegisterUser } from '../../DataTypes/user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

userName:string=""
Email:string=""
Password:string=""
PhoneNumber:string=""
  constructor(private reguser:ApiService,private router:Router) { }

  register(){
  let user:IRegisterUser={
    name:this.userName,
    email:this.Email,
    password:this.Password,
    phoneNumber:this.PhoneNumber

  }
  this.reguser.Register(user).subscribe({
     next:(Response)=>{
     if (Response.success) {
      alert(Response.message)
       this.router.navigateByUrl('/login');
     } else {
      console.log("can't registerd");
     }
     }
    })
  
 }

}
