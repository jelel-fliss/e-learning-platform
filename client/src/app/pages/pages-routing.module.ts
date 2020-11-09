import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import {SamplePageOneComponent} from './sample-page-one/sample-page-one.component';
import {SamplePageTwoComponent} from './sample-page-two/sample-page-two.component';
import {SamplePageThreeComponent} from './sample-page-three/sample-page-three.component';
import {SamplePageFourComponent} from './sample-page-four/sample-page-four.component';
import {SamplePageFiveComponent} from './sample-page-five/sample-page-five.component';
import { ClassesComponent } from './classes/classes.component';

export const PagesRoutes: Routes = [
  {
    path: 'app',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', component: HomeComponent},
      {path: 'page-1', component: SamplePageOneComponent},
       {path: 'page-2', component: SamplePageTwoComponent},
        {path: 'page-3', component: SamplePageThreeComponent},
         {path: 'page-4', component: SamplePageFourComponent},
          {path: 'classes', component: ClassesComponent},
    

    ]
  }
];
