import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { SkillsComponent } from './components/skills/skills.component';

export const ROUTES: Routes = [{ path: '', component: SkillsComponent }];

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class SkillsModule {}
