import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Interface/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id!:string
  product?:Product
  // ActivatedRoute allows you to access to all req params
  constructor(private route:ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']    
    this.product = this.productService.getProduct(this.id)
  }

}
