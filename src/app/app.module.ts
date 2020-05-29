import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import {CoreModule} from './core/core.module'
import { HomeModule } from './modules/home/home.module';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent
  
  
  ],
  imports: [
    BrowserModule,CoreModule,BrowserAnimationsModule,ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-top-right",
      preventDuplicates: false
    }),
    AppRoutingModule,NgbModule,HomeModule,SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
