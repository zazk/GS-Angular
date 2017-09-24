import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  message = 'Go into the service';
  messages = [
    `What's the next`,
    `Where I'm`,
    `Whenever you want`,
    `It's what you want`
  ];
  constructor() {}
}
