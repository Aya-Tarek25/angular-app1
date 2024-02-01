import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProductComponent } from "./components/product/product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { RateComponent } from "./components/rate/rate.component";
import { CartListService } from "./services/cartList.service";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { ProductListService } from "./services/productList.service";
import { ProductListComponent } from "./components/productList/productList.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from "./components/register/register.component";
import { ApiService } from "./services/api.service";
import { RegisterNewUserComponent } from "./components/RegisterNewUser/RegisterNewUser.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { AuthService } from "./services/auth.service";
import { authInterceptor } from "./services/interceptors/auth.interceptor";
import { WishlistComponent } from "./components/wishlist/wishlist.component";
import { LoaderComponent } from './components/loader/loader.component';
import { loaderInterceptor } from "./services/interceptors/loader.interceptor";
import { EditProductComponent } from "./components/edit-product/edit-product.component";



@NgModule({
    declarations:[	
      AppComponent,
      NavComponent,
      FooterComponent,
      ProductComponent,
      ProductListComponent,
      LoginComponent,
      HomeComponent,
      AboutMeComponent,
      ContactUsComponent,
      RateComponent,
      RegisterComponent,
      RegisterNewUserComponent,
      SignInComponent,
      AddProductComponent,
      EditProductComponent,
      WishlistComponent,
      LoaderComponent
   ],
    imports:[
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(routes),
      HttpClientModule,
      ReactiveFormsModule,
      
      
    ],
    bootstrap:[
     AppComponent
    ],
    providers:[
      CartListService,
      ProductListService,
      ApiService,
      AuthService,
      {provide:HTTP_INTERCEPTORS,useClass:authInterceptor,multi:true},
      {provide:HTTP_INTERCEPTORS,useClass:loaderInterceptor,multi:true}
    ]
})
export class AppModule{

}