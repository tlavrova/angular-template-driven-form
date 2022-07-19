import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-form',
  styleUrls: ['./hero-form.component.css'],
  template: `
    <h1>Hero Form</h1>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" required/>
    </div>

    <div class="form-group">
      <label for="alterEgo">Alter Ego</label>
      <input type="text" class="form-control" id="alterEgo"/>
    </div>

    <div class="form-group">
      <label for="power">Hero Power</label>
      <select class="form-control" id="power" required>
        <option *ngFor="let pow of powers" [value]="pow">{{pow}}</option>
      </select>
    </div>
  `
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

}
