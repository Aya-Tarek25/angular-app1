import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// export const authGuard: CanActivateFn = (route, state) => {
//   return false;
// };
@Injectable({
  providedIn:"root"
})
export class authGuard implements CanActivate {
  constructor(private authsrv:AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  
  if(this.authsrv.GetFromStorage()== null){
    alert('you must login first')
    this.router.navigate(["/sign-in",state.url])
    return false;
  }else{
    return true
  }
}
}
