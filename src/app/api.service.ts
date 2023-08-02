import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prodotto, iProdotto } from './prodotto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  favorites: Prodotto[] = []
  shoppingCart: Prodotto[] = []

  constructor(private http:HttpClient)
  {

  }

  get():Observable<iProdotto>
  {
    return this.http.get<iProdotto>('https://dummyjson.com/products/')
  }

  getById(id:number):Observable<Prodotto>
  {
    return this.http.get<Prodotto>('https://dummyjson.com/products/' + id)
  }

  addToFavorites(id:number): void
  {
    this.getById(id)
     .subscribe(res => this.favorites.push(res))
    console.log("favorites", this.favorites)
  }

  addToShoppingCart(id:number): void
  {
    this.getById(id)
     .subscribe(res => this.shoppingCart.push(res))
    console.log("shopping", this.shoppingCart)
  }

}
