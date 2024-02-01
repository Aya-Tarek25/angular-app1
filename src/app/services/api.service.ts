import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResult } from '../DataTypes/apiResult';
import { IProduct } from '../DataTypes/product';
import { IRegisterUser, IUser } from '../DataTypes/user';
import { ILoginedUser } from '../DataTypes/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  OriginalPath= "http://localhost:5000"
  
  constructor(private Http:HttpClient){ }

GetAllProducts()
{
 return this.Http.get<APIResult<IProduct[]>>(this.OriginalPath+ "/product")
}
GetProductByID(id:string){
  return this.Http.get<APIResult<IProduct>>(this.OriginalPath+"/product/"+id)
 }

 AddProduct(data: FormData)
 {
  return this.Http.post<APIResult<any>>(this.OriginalPath+ "/product/add",data)
 }

 EditProduct(id:string , data: FormData)
 {
  return this.Http.put<APIResult<any>>(this.OriginalPath+ "/product/edit/"+id,data)
 }

 
 Register(user:IRegisterUser){
  return this.Http.post<APIResult<IUser>>(this.OriginalPath+"/user/register",user)

 }
 Login(user:ILoginedUser){
 return  this.Http.post<APIResult<any>>(this.OriginalPath+"/user/login",user)
 }
 
}
