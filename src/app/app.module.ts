import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterDeveloperComponent } from './welcoming/components/register-developer/register-developer.component';
import { WelcomeComponent } from './welcoming/components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterDeveloperComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
