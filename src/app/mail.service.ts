import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  message = 'Go into the service';
  messages = [
    { id: 0, text: `What's the next` },
    { id: 1, text: `Where I'm` },
    { id: 2, text: `Whenever you want` },
    { id: 3, text: `It's what you want` }
  ];
  constructor() {}

  update(id, text) {
    console.log('Update:', id, text);
    this.messages = this.messages.map(m => {
      console.log(id, text, m.id, m.text);
      return m.id === id ? { id, text } : m;
    });
  }
}
