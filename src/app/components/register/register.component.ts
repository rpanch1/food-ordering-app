import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User = {
    fullname: '', 
    email: '', 
    password: '', 
    address: '',
    phone: '',
    card: '',
    cart: [],
    order: [],

  }

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._userService.addUser(this.newUser).subscribe();
    alert('You have been successfully registered!');
    this._router.navigate(['login']);
  }

}
