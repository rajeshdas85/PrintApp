import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/_services/product.service";
import { first } from "rxjs/internal/operators/first";
import { Product } from "src/app/_models";
// import { ProductService } from '../_services';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
 products: Product[] = [];
  constructor(private ProductService : ProductService) { }

  ngOnInit() {
    this.loadAllProducts();
  }
 private loadAllProducts() {
        this.ProductService.getAll().pipe(first()).subscribe(products => { 
            this.products = products; 
        });
    }
}
