import { useAnimation } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output, resolveForwardRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Persone, User } from '../models/users.model';
import { ChiamataService } from '../services/chiamata.service';
import { Router } from '@angular/router';
import { OutputnomeService } from '../services/outputnome.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  
@Output() nomeCompleto = new EventEmitter();
nome!:string;

  constructor(private chiamata: ChiamataService, private fb: FormBuilder,private router: Router,private loginOut:OutputnomeService ) {
   
  }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  logIn() {
    const usernamevalue = this.loginForm.get('username')?.value;
    const passwordvalue = this.loginForm.get('password')?.value;
    this.chiamata.logInQuery().subscribe((response: any) => {
      let foundUser = {};
      response.users.forEach((element: User) => {
        if (
          element.username == usernamevalue &&
          element.password == passwordvalue
        ) {
          this.nome=element.firstName+' '+element.lastName;
          foundUser = element;
          this.loginOut.emitChange(this.nome);
          console.log( this.loginOut);
          this.router.navigate(['/homepage']);
          this.nomeCompleto.emit(this.nome);
          
          return
        } else {
          console.log('error');
        }
      });
      console.log(foundUser);
    });
  }

  ngOnInit(): void {}


}
