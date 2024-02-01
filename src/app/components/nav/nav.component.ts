import { Component } from '@angular/core';
import { ProductListService } from '../../services/productList.service';
import { CartListService } from '../../services/cartList.service';
import { AuthService } from '../../services/auth.service';
import { IStoredUser } from '../../DataTypes/user';
import { WishlistService } from '../../services/wishlist.service';
import { IProduct } from '../../DataTypes/product';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  clientName:string = ""
  count=0
  cart=0
  // wishlist:any[]=[]
  LoggedUser:IStoredUser|null=null
  constructor(private prdsrv:ProductListService,private cartsrv:CartListService,private authsrv:AuthService,private wishsrv:WishlistService){
    this.count=this.prdsrv.Products.length;
    // this.wishsrv.wishsubject.subscribe(res=>{
    //   console.log(res.length);
    //       // this.wishlist= res.length
    // })
    // this.cart=this.cartsrv.userCarts.length;
    this.cartsrv.cartsubject.subscribe((value)=>{
      console.log(value.length);
      this.cart=value.length;
    })
    this.authsrv.UserSubject.subscribe(data=>{
      this.LoggedUser=data;
      console.log(this.LoggedUser);
    })
    // this.get()
  }
  // get(){
  //   this.wishsrv.getAllWishlist().subscribe(res=>{
  //     this.wishlist= res.data.length
  //     })
    //  }

  logOut(){
    this.authsrv.UserLoggedOut()
  }
}
