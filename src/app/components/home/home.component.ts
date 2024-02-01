import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username:string='';
constructor(private route:ActivatedRoute){
  // this.username = this.route.snapshot.username;

}
}
