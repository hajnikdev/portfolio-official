import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { ChipComponent } from './components/chip/chip.component';

export const ROUTES: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, ChipComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class HomeModule {}
