import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Persone, User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class ChiamataService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<Persone>('https://dummyjson.com/users/');
  }
}
