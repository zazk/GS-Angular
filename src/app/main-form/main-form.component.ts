import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-form',
  template: `

    <input type="text" #title [(ngModel)]="message"
    [ngClass]="{mousedown:isMouseDown}"
    (mousedown)="isMouseDown = true"
    (mouseup)="isMouseDown = false"
    (mouseleave)="isMouseDown = false"
    >
    <button (click)="update.emit({text:message})">Update</button>
  `,
  styles: [
    `
    :host{
      display:flex;
      flex-direction:column;
    }
    input:focus{
      font-weight:bold;
      outline:none;
    }
    button{
      border:none;
    }
    .mousedown{
      border:2px solid green;
    }
    `
  ]
})
export class MainFormComponent implements OnInit {
  isMouseDown;
  @Input() message;
  @Output() update = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
