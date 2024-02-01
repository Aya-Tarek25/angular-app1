import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartListService {
// userCarts:any[]=[]
cartsubject:BehaviorSubject<any[]>
constructor() { 
  this.cartsubject=new BehaviorSubject<any[]>(this.GetFromStorage())
}
GetFromStorage():any[]{
 let str= localStorage.getItem("cart");
 if(str== null ||str==""){
  return []
 }else{
  return JSON.parse(str) as any[]
 }
}
SetToStorage(data:any[]){
  localStorage.setItem("cart",JSON.stringify(data))
}

addToCart(id: any) {
  // this.userCarts.push(id);
  let cartData=this.cartsubject.value
 
  if(!cartData.includes(id)){
    cartData.push(id)
    this.SetToStorage(cartData)
    this.cartsubject.next(cartData)
  }
}

}
