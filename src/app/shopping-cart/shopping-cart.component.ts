import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  title: String;
  subtotal: number;
  total: number;

  constructor() {

    this.title = "Carrito";
    this.subtotal = 0;
    this.total = 0;
  }

  ngOnInit(): void {
  }

}
