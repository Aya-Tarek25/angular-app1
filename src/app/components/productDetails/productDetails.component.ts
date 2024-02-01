import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-productDetails',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.css']
})
export class ProductDetailsComponent  {
  item:any
  constructor(private route:ActivatedRoute,private prdApiSrv:ApiService) { 
   let id= this.route.snapshot.params["id"];
   console.log(id);
   this.prdApiSrv.GetProductByID(id).subscribe({
    next:(Response)=>{
    console.log(Response);
    this.item=Response.data
    }
   })
  }

 
}
