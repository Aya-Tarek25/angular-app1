
import { Data } from '../../DataTypes/store';
import { Component } from '@angular/core';
import { Product } from '../../DataTypes/product'; 
import { ProductListService } from '../../services/productList.service';
import { CartListService } from '../../services/cartList.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})


export class ProductComponent{
  p:Product[]
  constructor(private prdserv:ProductListService,private crtsrv:CartListService){
    this.p=prdserv.Products;
    // console.log('jhvdgfhdsghfgsd');
    
  }
  add(item:Product){
   this.crtsrv.addToCart(item.ID)
  }
    //Data= new Data()
}



  // products = new Data();  
  
    
  