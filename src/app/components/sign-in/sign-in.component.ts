import { Component } from '@angular/core';
import {IStoredUser } from '../../DataTypes/user';
import { ApiService } from '../../services/api.service';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {
  form: FormGroup;
  returnURL="/home"
  constructor(private logusr:ApiService,private builder:FormBuilder,private router:Router,private authServ:AuthService,private activatesrv:ActivatedRoute) {
  this.returnURL= this.activatesrv.snapshot.params["returnURL"]
    this.form = this.builder.group({
   
      email: ["", [Validators.required, Validators.minLength(10),Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      password: ["", [Validators.required, Validators.min(1),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]],


    })
   }

  
  sign(){
   
    console.log(this.form.value);
    this.logusr.Login(this.form.value).subscribe({
      next: (responce) => {
        console.log(responce);
        if(responce.success){
          alert(responce.message)
          let data : IStoredUser = {
            name:responce.data.user.name,
            token : responce.data.token,
            email : responce.data.user.email,

          }
                     
console.log(data);  
          this.authServ.NewUserLogged(data)
          this.router.navigateByUrl(this.returnURL)
       } else {
        console.log("can't logged");
       }

      },
      error: (err) => {
        console.log(err);

      }
    })
  
  } 

}

