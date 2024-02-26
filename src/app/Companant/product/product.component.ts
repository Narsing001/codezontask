import { Component, OnInit } from '@angular/core';
import { prod } from 'src/app/extrainterface/prod';
import { ProductdataService } from 'src/app/Service/productdata.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private aserv: ProductdataService) {}
  productdata: prod[] = [];
  ngOnInit(): void {
    this.getProductData();
  }
  getProductData() {
    this.aserv.getData().subscribe((res: any) => {
      this.productdata = res;
      console.log('Product data', this.productdata);
    });
  }
  addtocart(pdata: prod) {
    // console.log(pdata.id);
    debugger;
    const index = this.aserv.CartArray.indexOf(pdata);

    if (index === -1) {
      //Object is not present, so add it to the array
      this.aserv.CartArray.push(pdata);
    } else {
       // Object is already present in the array
       //we can increse the quantity of product here
        alert(`It's already available at index ${index}`);
    }
  }
}
