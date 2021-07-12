import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  userEmail: string;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    alert('Reset password link has been sent to your email.');
    this._router.navigate(['/login']);
  }

}
