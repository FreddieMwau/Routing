import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomLoadingService implements PreloadingStrategy{

  constructor() { }
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if(route.data && route.data['allowed']){
      return fn()
    }
    return of(null)
  }
}
