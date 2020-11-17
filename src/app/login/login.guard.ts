import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { LoginService } from "./login.service";

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
    ): boolean
     | UrlTree
     | Promise<boolean | UrlTree>
     | Observable<boolean | UrlTree> {
    return this.loginService.user.pipe(
      take(1),
      map(user => {
      const isAuth = !!user;
       if (isAuth) {
         return true;
       }
       return this.router.createUrlTree(['/login']);
    })
    //   tap(isAuth => {
    //   if (!isAuth) {
    //    this.router.navigate(['/login']);
    //   }
    // })
    );
    }
}
