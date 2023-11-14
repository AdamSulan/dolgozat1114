import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basket:any=[]
  private basketContent= new BehaviorSubject(this.basket)
  
  constructor() { }

  getBasketContent(){
    return this.basketContent
  }

  frissul(){
    this.basketContent.next(this.basket)
  }
  
  addTetel(idv:any, dbv:any){
    let tetel={id:idv, db:dbv}
    let van=this.basket.findIndex(
      (e:any)=> e.id==idv
    )
    console.log(van)
    if (van>=0) this.basket[van].db=dbv
    else this.basket.push(tetel)
    this.frissul()
    console.log(this.basket)
  }
  tetelTorlese(tetel:any){
    this.basket=this.basket.filter(
      (e:any)=>e.id!=tetel.id
    )
    this.frissul()
  }
}
