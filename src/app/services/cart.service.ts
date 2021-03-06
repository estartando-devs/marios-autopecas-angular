import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { ProductsComponent } from '../container/products/products.component'

import { Cart } from '../model/cart'
import { Produto } from '../model/pruducts';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new Subject<any>();

  public storageName: string = "cart";

  public cartArray: Produto[] = JSON.parse(localStorage.getItem(this.storageName)) ? JSON.parse(localStorage.getItem(this.storageName)) : [];
  public cartEmpty:boolean =false;
  private productsArray = Produto;
  private initArr = [];

  addToCart(produto) {
    //get array of API
    // console.log(this.cartArray);
    // console.log(this.cartArray.length);
    this.cartArray.push(produto);
    this.updateStorage(this.cartArray);
    this.contItemCart()

  }


  deleteProduct(_index) {
    this.cartArray.splice(_index, 1);
    this.updateStorage(this.cartArray);
    this.contItemCart()
  }

  updateStorage(update) {
    var updateString = JSON.stringify(update);
    localStorage.setItem(this.storageName, updateString);
  }

  contItemCart() {
    // let a = this.cartArray.length;
    // let b = document.querySelector("#nome")
    // b.textContent = a.toString()

    document.querySelector("#nome").textContent = this.cartArray.length.toString()

  }

}
