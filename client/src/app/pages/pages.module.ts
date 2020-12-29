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


import { ClassesComponent } from './classes/classes.component';
import { CommentComponent } from '../comment/comment.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PagesComponent,
    HomeComponent,
    ClassesComponent,
    CommentComponent,
    PdfViewerComponent,
    ProfilComponent
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
