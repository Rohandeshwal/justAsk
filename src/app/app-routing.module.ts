import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { RegisterServiceComponent } from './modules/home/components/service-details/service-details.component';


const routes: Routes = [
  // {path:'',redirectTo:'home',pathMatch:'full'},
  // {path:'home', loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)},
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "home", component: HomeComponent},
  { path: "service/:id", component: RegisterServiceComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
