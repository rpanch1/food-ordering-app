import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail: string;
  userPassword: string;

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit(): void {
    localStorage.removeItem('userid');
  }

  onSubmit(){
    this._userService.getUsers().subscribe((users) => {

      for (var i=0 ; i < users.length ; i++){
        if (users[i].email === this.userEmail && users[i].password === this.userPassword) {
          localStorage.setItem('userid', String(users[i].id));
          console.log(localStorage.getItem('userid'));
          this._router.navigate(['home']);
          return;
        }
      }
      alert('Invalid email or password');
    });
  }

}
