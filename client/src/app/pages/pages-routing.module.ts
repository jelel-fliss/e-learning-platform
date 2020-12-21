import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import {SamplePageTwoComponent} from './sample-page-two/sample-page-two.component';

import { ClassesComponent } from './classes/classes.component';



export const PagesRoutes: Routes = [
  {
    path: 'app',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', component: HomeComponent},
       {path: 'Profil', component: SamplePageTwoComponent},
          {path: 'Classes', component: ClassesComponent},



    

    ]
  }
];
