import { Component, Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[boom]'
})
export class DirectorDirective {
  @HostBinding() innerText = `I'm create a monster`;
}

@Component({
  selector: 'app-director',
  template: `
    <h2 boom>Director Title</h2>
    <div>Text in the middle</div>
    <p boom>
      director Works!
    </p>
  `,
  styles: []
})
export class DirectorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
