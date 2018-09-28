import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "src/app/_models";
import { ProductService } from "src/app/_services/product.service";
import { first } from "rxjs/internal/operators/first";
import { AlertService } from "src/app/_services";
import { Router } from "@angular/router";

@Component({
  selector: 'app-productupload',
  templateUrl: './productupload.component.html',
  styleUrls: ['./productupload.component.css']
})
export class ProductuploadComponent {
loading = false;
  private product: Product = new Product();;
  imgName:any;
  imgBase64Data:any;
  constructor(
        private productService: ProductService,
        private router: Router, 
      
        private alertService: AlertService) { }

  changeListener($event): void {

    this.readThis($event.target);
   
   
  }

  readThis(inputValue: any): void {
    debugger;
    // tslint:disable-next-line:prefer-const
    var file: File = inputValue.files[0];
    this.imgName = file.name;
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.imgBase64Data = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  private addProduct() {
    debugger;
    this.product.imgBase64Data=this.imgBase64Data;
    this.product.imgName=this.imgName;
    this.loading = true;
    this.productService.addProduct(this.product).pipe(first()).subscribe(
      data => {
        this.alertService.success('product added successful', true);
        this.router.navigate(['/productDetails']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
