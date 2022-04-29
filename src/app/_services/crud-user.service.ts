import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class CrudUserService {
 private host = 'http://localhost:8066';
  constructor(private http: HttpClient) { }

  public getResource(url: string) {
    return this.http.get(this.host+url);
  }
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.host}/users/all`);
  }
  

  
  updateUser(id: number, user: User): Observable<Object>{
    return this.http.put(`${this.host}/users/updateUser/${id}`, user);
  }

  
  deleteUser(id: number): Observable<Object>{
    return this.http.delete(`${this.host}/users/deleteUser/${id}`);
  }
  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.host}/users/findByUserId/${id}`);
  }

  createUser(user: User): Observable<Object>{
    return this.http.post(`${this.host}/users/addUser`, user);
  }
}
