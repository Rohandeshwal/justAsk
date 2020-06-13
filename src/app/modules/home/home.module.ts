import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { CaroselsComponent } from './components/carosels/carosels.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { ToastrModule,ToastContainerModule  } from 'ngx-toastr';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterServiceComponent } from './components/service-details/service-details.component';

// import { CardsComponent } from 'src/app/shared/components/cards/cards.component';


@NgModule({
  declarations: [CaroselsComponent, HomeComponent, RegisterServiceComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,BrowserAnimationsModule,FormsModule,ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-top-full-width',
      preventDuplicates: false
    }),ToastContainerModule,
    HomeRoutingModule,CoreModule,SharedModule
  ],
  exports: [HomeComponent, HomeRoutingModule]

})
export class HomeModule { }
