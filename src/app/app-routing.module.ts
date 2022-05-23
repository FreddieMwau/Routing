import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';

import { HomePageComponent } from './home-page/home-page.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"addProducts", component:AddProductComponent},
  {path:"products", component:ProductsComponent, children:[
    {path: ":id", component: ProductComponent},
    {path: ":id/edit", component: EditProductComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
