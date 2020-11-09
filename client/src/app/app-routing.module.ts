import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PagesComponent } from './pages/pages.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'app' , component: PagesComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
