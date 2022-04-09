import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
  @Output() toggleMenu = new EventEmitter<any>();

  isMenuVisible: boolean = false;

  constructor(private router: Router) {}

  toggleNavigationMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    this.toggleMenu.emit();
  }

  contactMe() {
    this.router.navigate(['underconstruction']);
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.isMenuVisible = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event?.target?.innerWidth > 991) {
      this.isMenuVisible = false;
    }
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent) {
    if(this.isMenuVisible) {
      window.history.forward();
      this.isMenuVisible = false;
    }
  }

}
