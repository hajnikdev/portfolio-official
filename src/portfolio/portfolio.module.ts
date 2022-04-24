import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PageNotFoundComponent } from 'src/portfolio/components/page-not-found/page-not-found.component';
import { PageUnderConstructionComponent } from './components/page-under-construction/page-under-construction.component';

export const ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'skills',
    // redirectTo: 'underconstruction',
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
  },
  {
    path: 'experience',
    // redirectTo: 'underconstruction',
    loadChildren: () =>
      import('./experience/experience.module').then((m) => m.ExperienceModule),
  },
  {
    path: 'projects',
    redirectTo: 'underconstruction',
    // loadChildren: () =>
    //   import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'contact',
    redirectTo: 'underconstruction',
    // loadChildren: () =>
    //   import('./contact/contact.module').then((m) => m.ContactModule),
  },
  { path: 'underconstruction', component: PageUnderConstructionComponent },
  //Wild Card Route for 404 request
  { path: 'notfound', component: PageNotFoundComponent },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'notfound',
  },
];

@NgModule({
  declarations: [PageNotFoundComponent, PageUnderConstructionComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class PortfolioModule {}
