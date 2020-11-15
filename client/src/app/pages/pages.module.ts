import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages-routing.module';
import { SamplePageOneComponent } from './sample-page-one/sample-page-one.component';
import { SamplePageTwoComponent } from './sample-page-two/sample-page-two.component';
import { SamplePageThreeComponent } from './sample-page-three/sample-page-three.component';
import { SamplePageFourComponent } from './sample-page-four/sample-page-four.component';
import { SamplePageFiveComponent } from './sample-page-five/sample-page-five.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PagesComponent,
    HomeComponent,
    SamplePageOneComponent,
    SamplePageTwoComponent,
    SamplePageThreeComponent,
    SamplePageFourComponent,
    SamplePageFiveComponent
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(PagesRoutes),
  ],
  providers: [],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
