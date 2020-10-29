import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PagesComponent,
    HomeComponent
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(PagesRoutes),
  ],
  providers: [],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
