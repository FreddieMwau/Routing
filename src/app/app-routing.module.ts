import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './Services/auth-guard.service';
import { CustomLoadingService } from './Services/custom-loading.service';


const routes: Routes = [
  {path:"", component:HomePageComponent},
  // lazy loading 
  // canLoad and preLoading interfere with each other 
  // canLoad it wont load the module until conditions are met while canActivate will preload the module but wont give access till conditions are met
  // data dictates if the data in the modules can be preloaded or loaded after request and canLoad cant affect this but canActivate will preload the modules
  // preloading works best with large modules that take time downloading while canLoad works best with small modules that have small amounts of data to download
  {path:'p', 
    data: {allowed:false},
    canLoad: [authGuard],
    loadChildren: ()=>import('./products/products.module')
    .then(m => m.ProductsModule)}
  // {path: 'notfound', component: PageNotFoundComponent},
  // when theres no match to a search route we redirect to not found route
  // { path: '**', redirectTo: 'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomLoadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
