import { Component, OnInit } from '@angular/core';
import { prod } from 'src/app/extrainterface/prod';
import { ProductdataService } from 'src/app/Service/productdata.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
 carr:prod[]=[];
 subtotalvalue:number=0;
 shipingprice=15.00;
 grandtotalvalue=0
  constructor(private aserv:ProductdataService) { }

  ngOnInit(): void {
    this.getcartdata();
    this.subtotaldtotal()
  } 

  getcartdata(){
    this.carr=this.aserv.CartArray;
    console.log(this.carr);
  }
  removefromcart(aobj:prod){
    
    const index=this.carr.indexOf(aobj);
    console.log("cliked in remove",aobj.id ,"and index is",index);
    this.carr.splice(index,1);
    this.getcartdata();
    this.grandtotalvalue=0;
    this.subtotalvalue=0;
    this.subtotaldtotal();
  }

  subtotaldtotal(){
    this.carr.forEach((item)=>{
        this.subtotalvalue=this.subtotalvalue+item.price;
    })
    this.grandTotal()
  }
  grandTotal(){
    this.grandtotalvalue=this.subtotalvalue+this.shipingprice
  }


  


}
