import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  constructor(private route:ActivatedRoute, private router:Router, private productService:ProductService) { }

  ngOnInit(): void {
    // accessing the req params thru the snapshot
    // this.id = this.route.snapshot.params['id']    
    // this.product = this.productService.getProduct(this.id)

    // this will listen to the changes of the snapshot
    this.route.params.subscribe((params: Params) =>{
      this.id=params['id']
      this.product = this.productService.getProduct(this.id)
    })
  }

  edit(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling:'preserve' })
  }

}
