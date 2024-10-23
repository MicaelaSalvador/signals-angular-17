import { Component, computed, effect, input, model } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  nombre = input<string>();
  // apellidos = input<string>();
  apellidos=input('',{
    alias:'surname',
    transform:(value:string) => value.toUpperCase()
  });

  email = input.required<string>();

  nombreCompleto = computed(()=> `${this.nombre()} ${this.apellidos()}`)

activo= model(false);

  constructor(){
    effect(() => {
      console.log(`valor para el nombre : ${this.nombre()}`);
    });
  }

  onClick(){
    this.activo.update(value => !value)
  }
  
}
