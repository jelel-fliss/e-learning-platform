import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { ProfilComponent } from './profil/profil.component';

export const PagesRoutes: Routes = [
  {
    path: 'app',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', component: HomeComponent},
      { path: 'Profil', component: ProfilComponent},
      { path: 'Classes', component: ClassesComponent},
      { path: 'pdf', component: PdfViewerComponent},
    ]
  }
];
