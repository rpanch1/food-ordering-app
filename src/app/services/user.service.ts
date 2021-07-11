import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/models/user';
import { Observable } from 'rxjs';
import { Food } from 'src/models/food';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000/users';

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`
    return this._http.get<User>(url);
  }

  addUser(user: User): Observable<User> {
    return this._http.post<User>(this.apiUrl, user, httpOptions);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this._http.put<User>(url, user, httpOptions);
  }

  
}
