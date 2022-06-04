import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { authService } from "./auth.service";

// allows us to add it to the appModule as a provider
@Injectable({
    providedIn: "root"
})
export class authGuard implements CanActivate, CanActivateChild, CanLoad{
    constructor(private authService:authService, private router:Router){}
    canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
        if (this.authService.isLoggedIn()) {
            return true
        } else {
            this.router.navigate(["/"])
            return false
        }
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        // throw new Error("Method not implemented.");
        return this.canActivate(childRoute, state)
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        // throw new Error("Method not implemented.");
        if(this.authService.isLoggedIn()){
            return true
        } else {
            this.router.navigate(["/"])
            return false
        }
    }
    
    
}