import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number;
  user: User = {
    fullname: '', 
    email: '', 
    password: '', 
    address: '',
    phone: '',
    card: '',
    cart: [],
    order: [],
  }
  edit: boolean = false;
  
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.id = Number(localStorage.getItem('userid'));
    this._userService.getUserById(this.id).subscribe((user) => {
      this.user = user;
    })
  }

  editProperty(){
    this._userService.updateUser(this.user).subscribe(() => (this.edit = !this.edit));
  }

}
