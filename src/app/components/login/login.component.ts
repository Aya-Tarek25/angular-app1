import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ILoginedUser, IRegisterUser,IStoredUser } from '../../DataTypes/user';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loguser:ILoginedUser

 constructor(private logsrv:ApiService,private router:Router,private authsrv:AuthService){
  this.loguser={
    email:"",
    password:""
  }
 }
 
    login(){
   
      this.logsrv.Login(this.loguser).subscribe({
        next:(Response)=>{
          if (Response.success) {
          
            let data : IStoredUser = {
              token : Response.data.token,
              name : Response.data.name,
              email : Response.data.email

            }
            this.authsrv.NewUserLogged(data)
             this.router.navigateByUrl('/home')
             
          } else {
            alert(Response.message);
            
          }
        }
      })
    }
  
  }

