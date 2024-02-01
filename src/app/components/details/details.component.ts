import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from '../../services/productList.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {
  item:any
  constructor(private route:ActivatedRoute,private prdserv:ProductListService) { 
     let id= this.route.snapshot.params["id"];
  console.log(id);

   this.item= this.prdserv.Products[id]
   console.log(this.item);
   }
  
 
}
