import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DetailsComponent } from './components/details/details.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/productList/productList.component';
import { ProductDetailsComponent } from './components/productDetails/productDetails.component';
import { RegisterNewUserComponent } from './components/RegisterNewUser/RegisterNewUser.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { authGuard } from './services/guards/auth.guard';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:"",redirectTo:"product",pathMatch:"full"},
     {path:"home",component:HomeComponent},
    {path:"local-prodcut",component:ProductComponent},
    {path:"prodcut",component:ProductListComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"about-me",component:AboutMeComponent},
    {path:"contact-us",component:ContactUsComponent},
    {path:"detail/:id",component:DetailsComponent},
    {path:"details/:id",component:ProductDetailsComponent},
    {path:"AddUser",component:RegisterNewUserComponent},
    {path:'add-product',component:AddProductComponent,canActivate:[authGuard]},
    {path:'edit-product/:id',component:EditProductComponent},
    {path:'sign-in/:returnURL',component:SignInComponent},
    {path:'wishlist',component:WishlistComponent,canActivate:[authGuard]},
    {path:'not-found',component:NotFoundComponent},
    {path:"**",redirectTo: "product", pathMatch: "full" }
];
