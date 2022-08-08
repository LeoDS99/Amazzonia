import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazzonia';

  nameDeposit!:string;

  showName(param: any){
  this.nameDeposit = param;
  console.log(this.nameDeposit);
  }

  nameConsole(){
    console.log(this.nameDeposit)
  }
}
