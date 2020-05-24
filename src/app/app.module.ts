import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CoreModule} from './core/core.module'
import { HomeModule } from './modules/home/home.module';

import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
  
  
  ],
  imports: [
    BrowserModule,CoreModule,
    AppRoutingModule,NgbModule,HomeModule,SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
