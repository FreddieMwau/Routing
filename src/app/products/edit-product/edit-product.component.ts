import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Interface/product';
import { canComponentDeactivate } from 'src/app/Services/can-deactivat-guard.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, canComponentDeactivate {
  isValid: boolean = false
  allowEdit:boolean = false
  productName=''
  productDescription=''
  product?:Product
  productPrice=0
  id!:string
  changesSaved:boolean=false
  constructor(private route:ActivatedRoute, private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id=params['id']
      this.product=this.productService.getProduct(this.id)
      // modulate the form with the value existing 
      if(this.product){
        this.productName=this.product.name
        this.productDescription = this.product.description
        this.productPrice = this.product.price
      }
    })
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['AllowEdit'] === '1'?true:false
    })
  }

  editProduct(){
    if(this.productName.length === 0 || this.productDescription.length === 0 || this.productPrice <= 0){
      this.isValid=true
    }
    this.productService.updateProduct(this.id, this.productName, this.productDescription, this.productPrice)
    this.changesSaved = true
    this.router.navigate(['products'])
  }

  // CanDeactivate Logic
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean>{
    if(!this.allowEdit){
      return true
    }

    if((this.productName !== this.product?.name || this.productDescription !== this.product?.description || this.productPrice !== this.product?.price) && !this.changesSaved){
      return confirm("Do you want to discard the changes..??")
    } else {
      return true
    }
  };

}
