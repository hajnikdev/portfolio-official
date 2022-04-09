import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Variables
  menuVisibility: boolean = false;

  // Class methods
  onMenuToggle() {
    this.menuVisibility = !this.menuVisibility
  }
}
