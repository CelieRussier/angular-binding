import { Component } from '@angular/core';

export class Order {
  constructor(
      public firstname: string,
      public lastname: string,
      public email: string,
  ) {}
}

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {

  model: Order = new Order("firstname", "lastname", "email@email.com");
  onSubmit(): void {
    console.log(this.model)
  }
}


