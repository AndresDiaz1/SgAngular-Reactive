import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OtherComponentComponent } from './other-component/other-component.component';
import { ExternalComponent } from './external/external.component';


@NgModule({
  declarations: [
    AppComponent,
    OtherComponentComponent,
    ExternalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
