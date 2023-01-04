import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  developer: Developer = new Developer('Super', 'Dev', 35, "F", "je vis à Lyon et j'aime la paêlla", [
    new Skill(
      'Angular',
      'https://cdn.iconscout.com/icon/free/png-256/angular-2752246-2285063.png',
      'https://angular.io/'
    ),
  ])
  constructor() {}

  ngOnInit(): void {}
}
