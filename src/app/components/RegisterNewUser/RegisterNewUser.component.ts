import { Component, OnInit } from '@angular/core';
import { IRegisterUser } from '../../DataTypes/user';
import { ApiService } from '../../services/api.service';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-RegisterNewUser',
  templateUrl: './RegisterNewUser.component.html',
  styleUrls: ['./RegisterNewUser.component.css']
})
export class RegisterNewUserComponent  {
  form: FormGroup;
  // returnURL="/home"
  constructor(private reguser:ApiService,private builder:FormBuilder,private router:Router) {
 
    this.form = this.builder.group({
      name: this.builder.control("", [Validators.required, Validators.minLength(3)]),
      email: ["", [Validators.required, Validators.minLength(10),Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      phoneNumber: ["", [Validators.required, Validators.min(10)]],
      password: ["", [Validators.required, Validators.min(1),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]],


    })
   }

  
  register(){
   
  
    console.log(this.form.value);
    this.reguser.Register(this.form.value).subscribe({
      next: (responce) => {
        console.log(responce);
        if(responce.success){
          alert(responce.message)
          this.router.navigateByUrl('/sign-in');
       } else {
        console.log("can't registerd");
       }

      },
      error: (err) => {
        console.log(err);

      }
    })
  
  } 

}
