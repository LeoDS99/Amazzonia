import { useAnimation } from '@angular/animations';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  resolveForwardRef,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Persone, User } from '../models/users.model';
import { ChiamataService } from '../services/chiamata.service';
import { Router } from '@angular/router';
import { OutputnomeService } from '../services/outputnome.service';
import { NavbarService } from '../services/navbar.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  nome!: string;
  userId!: number;

  constructor(
    private chiamata: ChiamataService,
    private fb: FormBuilder,
    private router: Router,
    private loginOut: OutputnomeService,
    private navbar: NavbarService
  ) {}

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  logIn() {
    const usernamevalue = this.loginForm.get('username')?.value;
    const passwordvalue = this.loginForm.get('password')?.value;
    this.chiamata.logInQuery(usernamevalue!).subscribe((response: any) => {
      console.log(response.users[0].id);
      if (response.users[0].password === passwordvalue) {
        this.nome =
          response.users[0].firstName + ' ' + response.users[0].lastName;
        console.log(this.nome);
        this.userId = response.users[0].id;

        let completeName = this.nome;
        localStorage.setItem('nome', completeName);

        this.router.navigate(['/dashboard/homepage'], {
          queryParams: { name: this.nome, userId: this.userId },
        });
      } else {
        alert('credenziali sbagliate');
      }
    });
  }

  ngOnInit(): void {}
}
