import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { canComponentDeactivate } from '../../Services/can-deactivat-guard.service';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  isInValid:boolean = false
  changesSaved:boolean = false
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(name:string, description:string, price:number){
    if (name.length === 0 || description.length === 0 || price <= 0){
      this.isInValid=true
      setTimeout(()=>{
        this.isInValid=false
      }, 5000)
    } else {
      this.productService.addProduct(name, description, price)
    }
  }
  

  // canDeactivate() : boolean | Observable<boolean> | Promise<boolean>{
  //   if(!this.isInValid){
  //     return true
  //   }

  //   if(()){}
  // };
}
