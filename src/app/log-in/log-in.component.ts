import { useAnimation } from '@angular/animations';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Persone, User } from '../models/users.model';
import { ChiamataService } from '../services/chiamata.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(private chiamata: ChiamataService, private fb: FormBuilder) {}

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
          foundUser = element;
          console.log(true);
        } else {
          console.log('error');
        }
      });
      console.log(foundUser);
    });
  }

  ngOnInit(): void {}
}
