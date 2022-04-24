import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  HostListener,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

// Translate service
import { LocalizeRouterService, LocalizeRouterPipe } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent implements OnInit{
  @Output() toggleMenu = new EventEmitter<any>();

  locales = this.localizeRouterService.parser.locales;
  currentUrl = '';
  isMenuVisible: boolean = false;

  constructor(private router: Router,  private localizeRouterService: LocalizeRouterService,) {}

  ngOnInit(): void {
    this.setCurrentUrl();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      this.setCurrentUrl();
    });
  }

  private setCurrentUrl(): void {
    this.currentUrl = this.router.url
      .replace('/' + this.localizeRouterService.parser.currentLang, '')
      .split('?')[0];
  }

  toggleNavigationMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    this.toggleMenu.emit();
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
