import { Component, OnInit } from '@angular/core';
import { BackResponse } from 'src/app/interfaces/backresponse.interface';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[] =[];

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(
        (res:BackResponse<Product[]>) => this.products = res.data,
        err => console.log(err)
      )
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id)
      .subscribe(
        res => {
          console.log(res);
          this.getProducts();
        },
        err => console.log(err)
      )
  }
}
