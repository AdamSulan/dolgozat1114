import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { BasketService } from '../basket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  tetelek:any
  products:any
  nev:any
  cim:any
  beleegyezes=false
  body:any={}
  constructor(private kosar:BasketService, private base:BaseService, private router:Router){
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
  order(){
    this.body.uid="1111A6E"
    this.body.nev=this.nev
    this.body.cim=this.cim
    this.body.tetelek=this.tetelek
    this.body.status="Felvéve"


    this.base.addOrder(this.body).subscribe(
      ()=>this.router.navigate(['/home'])
    )
  }
}
