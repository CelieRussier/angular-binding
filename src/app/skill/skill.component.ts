import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit{
  @Input() skill: Skill = new Skill('', '')

  @Output()
  dataChange: EventEmitter<string> = new EventEmitter();

  sendDataToParent(): void {
    this.dataChange.emit('Chaîne de caractères envoyée au parent');
  }

  ngOnInit(): void {}
}
