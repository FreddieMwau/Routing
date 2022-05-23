import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { authService } from "./auth.service";

// allows us to add it to the appModule as a provider
@Injectable({
    providedIn: "root"
})
export class authGuard implements CanActivate{
    constructor(private authService:authService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // throw new Error("Method not implemented.");
        if(this.authService.isLoggedIn()){
            return true
        } else {
            this.router.navigate(["/"])
            return false
        }
    }
    
}