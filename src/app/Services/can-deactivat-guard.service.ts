import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface canComponentDeactivate{
    canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>;
}
export class canDeactivateGuard implements CanDeactivate<canComponentDeactivate>{
    canDeactivate(
        component: canComponentDeactivate, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot): boolean  | Observable<boolean> | Promise<boolean> {
        // throw new Error("Method not implemented.");
        return component.canDeactivate()
    }

}