import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  id: number;
  orders: Order[];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.id = Number(localStorage.getItem('userid'));
    this._userService.getUserById(this.id).subscribe((user) => {
      this.orders = user.order;
    })
  }

  removeOrder(index: number, action: string){
    this.orders.splice(index, 1);
    this._userService.getUserById(this.id).subscribe((user) => {
      user.order = this.orders;
      this._userService.updateUser(user).subscribe();
      alert('The order has been ' + action + '!');
    });
  }

}
