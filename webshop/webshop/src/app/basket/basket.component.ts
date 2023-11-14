import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  tetelek:any
  products:any
  constructor(private kosar:BasketService, private base:BaseService){
    this.kosar.getBasketContent().subscribe(
      (adatok)=>this.tetelek=adatok
    )
    this.base.getProducts().subscribe(
      (adatok)=>this.products=adatok
    )
  }

  keresTermek(id:any){
    return this.products.find(
      (e:any)=>e.id==id
    )
  }
  valtozas(tetel:any){
    this.kosar.addTetel(tetel.id,tetel.db)
  }
  tetelTorlese(tetel:any){
    this.kosar.tetelTorlese(tetel)
  }
  osszesen(){
    let sum=0
    this.tetelek.forEach((e:any) => {
      sum+=this.keresTermek(e.id).price*e.db
    });
    return sum
  }
}
