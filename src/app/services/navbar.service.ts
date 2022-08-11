import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private showNavbar = new BehaviorSubject<any>(null);

  showEmitted$ = this.showNavbar.asObservable();
  navChange(name:boolean){
  this.showNavbar.next(name);
  }

  constructor() { }


}
