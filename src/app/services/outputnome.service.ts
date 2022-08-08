import {  Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';


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
