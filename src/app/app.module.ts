import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MailService } from './mail.service';
import { MainFormComponent } from './main-form/main-form.component';

@NgModule({
  declarations: [AppComponent, MainFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [
    { provide: 'mail', useClass: MailService },
    { provide: 'api', useValue: 'http://google.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
