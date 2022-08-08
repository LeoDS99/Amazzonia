import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutputnomeService {
  private nameEmitter = new Subject<any>();

  nameEmitted$ = this.nameEmitter.asObservable();
  emitChange(name:any){
  this.nameEmitter.next(name);
  }
  constructor() { }
}
