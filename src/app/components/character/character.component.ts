import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor() { }

  @Input() charactersData = []
  @Input() a = 'inicial'

  ngOnInit(): void {
  }

}
