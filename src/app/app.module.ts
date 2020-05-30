import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from "./core/app-routing.module";
import { AppComponent } from './app.component';
import { RegComponent } from './components/reg/reg.component';


@NgModule({
  declarations: [
    AppComponent,
    RegComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
