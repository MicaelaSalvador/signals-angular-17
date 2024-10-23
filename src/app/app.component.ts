import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  currentDate:string='';
  userActivo:boolean=true;

  constructor(){
    setInterval(() => {
      this.currentDate = (new Date()).toISOString();
    },1000)
  }

  onChange(){
    console.log('Se modifica la propiedad activo');
  }

}
