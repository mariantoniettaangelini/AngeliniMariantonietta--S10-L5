import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CompletedComponent } from './Components/completed/completed.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Completed', component: CompletedComponent},
  {path:'Users', component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
