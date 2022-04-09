import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ContactComponent } from './components/contact/contact.component';

export const ROUTES: Routes = [{ path: '', component: ContactComponent }];

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class ContactModule {}
