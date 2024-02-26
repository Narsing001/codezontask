import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtocartComponent } from './Companant/addtocart/addtocart.component';
import { AdduserComponent } from './Companant/adduser/adduser.component';
import { ProductComponent } from './Companant/product/product.component';

const routes: Routes = [
  {path:'',redirectTo:'/product',pathMatch:'full'},
  {path:'product',component:ProductComponent},
  {path:'addtocart',component:AddtocartComponent},
  {path:'adduser',component:AdduserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
