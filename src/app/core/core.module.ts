import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http'


import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,HttpClientModule
  ],
  exports: [HeaderComponent, CoreRoutingModule,FooterComponent]

})
export class CoreModule { }
