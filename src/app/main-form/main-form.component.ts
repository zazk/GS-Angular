import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-form',
  template: `

    <input type="text" [(ngModel)]="message" #title  >
    <button (click)="update.emit({text:message})">Update</button>
  `,
  styles: []
})
export class MainFormComponent implements OnInit {
  @Input() message;
  @Output() update = new EventEmitter();
  constructor() {}

  ngOnInit() {
    setInterval(() => (this.message = Math.random().toString()), 1000);
  }
}
