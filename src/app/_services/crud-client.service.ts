import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class CrudClientService {
  private host = 'http://localhost:8066';
  constructor(private http: HttpClient) { }

  public getResource(url: string) {
    return this.http.get(this.host+url);
  }
  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.host}/clients/all`);
  }
  updateClient(id: number, client: Client): Observable<Object>{
    return this.http.put(`${this.host}/clients/updateClient/${id}`, client);
  }

  createClient(client : Client): Observable<Object>{
    return this.http.post(`${this.host}/clients/addClient`, client);
  }

  getClientById(id: number): Observable<Client>{
    return this.http.get<Client>(`${this.host}/clients/findByClientId/${id}`);
  }
  deleteClient(id: number): Observable<Object>{
    return this.http.delete(`${this.host}/clients/deleteClient/${id}`);
  }
}
