import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './products/product/product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    HomePageComponent,
    ProductsComponent,
    NotFoundComponent,
    ProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
