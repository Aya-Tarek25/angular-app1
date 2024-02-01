import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { IProduct } from '../../DataTypes/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent  {
  list:IProduct[]=[]
    constructor(private wishsrv:WishlistService) {
     this.get();
    
   }
   get(){
    this.wishsrv.getAllWishlist().subscribe(res=>{
      this.list=res.data
    })
   }
   removeFromWishlist(item:IProduct){
   this.wishsrv.remove(item._id).subscribe(res=>{
    alert(res.message)
    // console.log(res.data);
    this.get()
    
   })
   }

}
