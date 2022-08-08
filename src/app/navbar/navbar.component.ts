import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OutputnomeService } from '../services/outputnome.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Input() nomeCompleto!:string ;

nomeEmesso!:string;
subscription!: Subscription;
  constructor(private dataService: OutputnomeService ) {
    this.subscription = dataService.nameEmitted$.subscribe(val => this.nomeEmesso = val)
   }

  emitValue(){
    // this.navRecived.emitChange('ciao')
  }
  ngOnInit(): void {
  }

}
