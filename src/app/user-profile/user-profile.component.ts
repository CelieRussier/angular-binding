import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  @Input()  hidden: boolean =false;
  @Output() clickHidden = new EventEmitter<boolean>();
 
  changeHidden(){
    this.hidden = !this.hidden;
    this.clickHidden.emit(this.hidden);
  }
}
