import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persone, User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class ChiamataService {
  constructor(private http: HttpClient) {}

  logInQuery() {
    return this.http.get(`https://dummyjson.com/users/`);
  }
}
