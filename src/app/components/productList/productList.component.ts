import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../DataTypes/product';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})
export class ProductListComponent  {

  list:IProduct[] =[]
  
  constructor(private prdAPIServ:ApiService,private wishsrv:WishlistService){
    this.prdAPIServ.GetAllProducts()
    .subscribe({
      next:(response)=>{
        console.log(response);
        
        this.list =response.data 
        
    },
    error:(err)=>{
      console.log(err);
      
    }
    })
  }
 
  
  addToWishlist(item:IProduct){
this.wishsrv.add(item).subscribe(res=>{
  console.log(res);
 
})
  }
}
 

//   constructor(private prdAPIServ:ApiService){
//     this.prdAPIServ.GetAllProducts()
//     .subscribe({
//       next:(response)=>{
//         console.log(response);
        
//         this.list =response.data 
        
//     },
//     error:(err)=>{
//       console.log(err);
      
//     }
//     })
//   }

