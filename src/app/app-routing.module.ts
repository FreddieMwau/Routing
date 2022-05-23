import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';

import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { authGuard } from './Services/auth-guard.service';


const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"addProducts", canActivate: [authGuard], component:AddProductComponent},
  {path:"products", canActivate: [authGuard], component:ProductsComponent, children:[
    {path: ":id", component: ProductComponent},
    {path: ":id/edit", component: EditProductComponent}
  ]},
  {path: 'notfound', component: PageNotFoundComponent},
  // when theres no match to a search route we redirect to not found route
  { path: '**', redirectTo: 'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
