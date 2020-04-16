import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public compteurEnfant: number;
  @Output() public valueChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public add(): void{
      this.valueChanged.emit(++this.compteurEnfant);
  }

  public remove(): void {
      this.valueChanged.emit(--this.compteurEnfant);
  }

}
