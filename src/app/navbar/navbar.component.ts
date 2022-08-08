import { Component, Input, OnInit } from '@angular/core';
import { OutputnomeService } from '../services/outputnome.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Input() nomeCompleto!:string ;

  constructor(private navRecived: OutputnomeService ) { }

  emitValue(){
    this.navRecived.emitChange('ciao')
  }
  ngOnInit(): void {
  }

}
