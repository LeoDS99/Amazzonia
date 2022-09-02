import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Persone } from '../models/users.model';
import { ChiamataService } from '../services/chiamata.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  logIn() {
    const usernamevalue = this.loginForm.get('username')?.value;
    const passwordvalue = this.loginForm.get('password')?.value;
    this.chiamata.logInQuery(usernamevalue!).subscribe((response: Persone) => {
      console.log(response.users[0].password);
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
