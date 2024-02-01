import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../DataTypes/product';
import { APIResult } from '../DataTypes/apiResult';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  OriginalPath= "http://localhost:5000"
  // wishsubject:BehaviorSubject<any>
constructor(private http:HttpClient) {
  // this.wishsubject=new BehaviorSubject<any>(this.getAllWishlist())
 }

add(item:IProduct){
 return this.http.post<APIResult<IProduct>>(this.OriginalPath+"/user/wishlist/add",item)
}
getAllWishlist( ){
  return this.http.get<APIResult<IProduct[]>>(this.OriginalPath+"/user/wishlist")
 }
 remove(id:string){
  return this.http.delete<APIResult<IProduct>>(this.OriginalPath+"/user/wishlist/remove/"+id)
 }
}
