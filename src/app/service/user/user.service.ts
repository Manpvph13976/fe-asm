import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/models/users';
const API = `https://lent0d-8080.preview.csb.app/api`;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signup(user: any) {
    return this.http.post(`${API}/signup`, user);
  }
  signin(user: any) {
    console.log(user);
    return this.http.post(`${API}/signin`, user);
  }
}
