import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { authGuard } from '../Services/auth-guard.service';
import { canDeactivateGuard } from '../Services/can-deactivat-guard.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AddProductComponent,
    ProductComponent,
    ProductsComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'p', children: [
          { path: "addProducts", canActivate: [authGuard], component: AddProductComponent },
          {
            path: "products", canActivate: [authGuard], canActivateChild: [authGuard], component: ProductsComponent, children: [
              { path: ":id", component: ProductComponent },
              { path: ":id/edit", component: EditProductComponent, canDeactivate: [canDeactivateGuard] }
            ]
          },
        ]
      },
      {path: 'notfound', component: PageNotFoundComponent},
      {path:'**', redirectTo: 'notfound'}
    ])
  ]
})
export class ProductsModule { }
