import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ExperienceComponent } from './components/experience/experience.component';

export const ROUTES: Routes = [{ path: '', component: ExperienceComponent }];

@NgModule({
  declarations: [ExperienceComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class ExperienceModule {}
