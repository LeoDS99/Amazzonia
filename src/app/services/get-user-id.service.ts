import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUserIdService {
  private subject = new Subject<any>();
  emittedId$ = this.subject.asObservable();

  getUserId(value: any) {
    this.subject.next(value);
  }
  constructor() {}
}
