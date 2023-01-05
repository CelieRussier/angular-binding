import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {
  cook: boolean = false;
  isCooked: number = 0;
  numberOfCookies: number = 0;
  flourQuantity: number = 0;
  saltQuantity: number = 0;
  sugarQuantity: number = 0;
  eggQuantity: number = 0;

  startCooking(): void {
   this.cook = true;
  }

  onGetCookies(event: number): void {
    this.isCooked =+ event;
    console.log(this.isCooked)
    console.log(this.cook)
  }
}
