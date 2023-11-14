import { Component } from '@angular/core';
import { BasketService } from '../basket.service';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any
  showError=false
  errorMessage=""

  oszlopok=[
    {key:"id", text:"#", type:"plain"},
    {key:"name", text:"Név", type:"text"},
    {key:"price", text:"Ár", type:"number"},
    {key:"description", text:"Leírás", type:"text"},
    {key:"image_Url", text:"Kép", type:"image"},
    {key:"quantity", text:"Mennyiség", type:"number"},
  ]

  constructor(private base:BaseService, private kosar:BasketService){

     this.base.getProducts().subscribe({
      next:(adatok)=>{this.products=adatok; this.showError=false},
      error:(e)=>{this.showError=true; this.errorMessage=e.message}
    })    
  }

  kosarba(id:any, db:any, ma:any){
    // console.log(id,";",db)
    this.kosar.addTetel(id,db)
  }
}
