import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'myFirstApp';
  
  onomatopiaList: string[] = ['eh', 'oh', 'hi'];

  onReceiveNewOnomatopia(newOnomatopia: string): void {
    this.onomatopiaList.push(newOnomatopia)
  }
}
