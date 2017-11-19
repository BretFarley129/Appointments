import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path:'logout', redirectTo: ''},
  {path: 'dashboard', component:MainComponent},
  {path: 'new_appointment', component:ScheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
