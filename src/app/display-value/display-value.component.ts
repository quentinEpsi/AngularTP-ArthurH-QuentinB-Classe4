import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-value',
  template: `<p>Bienvenue sur le site : {{nom }} <br/> il a été crée le : {{ birthday | date }}</p>`
})
export class DisplayValueComponent {
  birthday = new Date(2019, 11, 20);
  nom = 'FormValidator';

}
