import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DirectorComponent, DirectorDirective } from './director/director.component';
import { MailService } from './mail.service';
import { MainFormComponent } from './main-form/main-form.component';
import { RestComponent } from './rest/rest.component';
import { AppMaterialModule } from './app-material.module';

@NgModule({
	declarations: [
		AppComponent,
		MainFormComponent,
		DirectorComponent,
		DirectorDirective,
		RestComponent
	],
	imports: [ BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule, AppMaterialModule ],
	providers: [
		{ provide: 'mail', useClass: MailService },
		{ provide: 'api', useValue: 'http://google.com' }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
