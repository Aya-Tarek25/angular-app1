import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './DataTypes/product';
import { ProductListService } from './services/productList.service';
import { LoaderService } from './services/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-app';
  name= 'Our Products';
  p:Product[]
  isload=false
constructor(private prdsrv:ProductListService,private loadersrv:LoaderService){
  this.p=prdsrv.Products
  this.loadersrv.isLoaded.subscribe((data)=>{
    this.isload=data
  })
}
  // recivedata(data:string){

  // }
}
