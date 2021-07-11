import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Food } from 'src/models/food';
import { Order } from 'src/models/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  id: number;
  cart: Food[];
  total: number = 0;

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit(): void {
    this.id = Number(localStorage.getItem('userid'));
    this._userService.getUserById(this.id).subscribe((user) => {
      this.cart = user.cart;
      this.getTotal();
    })
  }

  removeFromCart(index: number){
    this.cart.splice(index, 1);
    this.getTotal();
    this._userService.getUserById(this.id).subscribe((user) => {
      user.cart = this.cart;
      this._userService.updateUser(user).subscribe();
    });
  }

  placeOrder() {
    const newOrder = { items: this.cart, total: this.total };
    this.cart = [];
    this.total = 0;
    this._userService.getUserById(this.id).subscribe((user) => {
      user.order.push(newOrder);
      user.cart = this.cart;
      this._userService.updateUser(user).subscribe();
      alert('Your order has been successfully placed!');
      this._router.navigate(['/orders']);
    });

  }

  getTotal(){
    this.total = 0;
    for(var i=0; i<this.cart.length; i++){
      this.total += this.cart[i].price;
    }
  }
}
