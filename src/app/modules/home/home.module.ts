import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CaroselsComponent } from './components/carosels/carosels.component';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from 'src/app/core/core.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterServiceComponent } from './components/register-service/register-service.component';
// import { CardsComponent } from 'src/app/shared/components/cards/cards.component';


@NgModule({
  declarations: [CaroselsComponent, HomeComponent, RegisterServiceComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,CoreModule,SharedModule
  ],
  exports: [HomeComponent, HomeRoutingModule]

})
export class HomeModule { }
