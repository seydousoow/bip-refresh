import { Component, DestroyRef, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { EventType, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

export interface MenuItem {
  label: string;
  routerLink?: string;
  icon?: string;
}

@Component({
  selector: 'bip-header',
  standalone: true,
  imports: [RouterModule, FormsModule, NgOptimizedImage],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  isMenuOpen = false;
  isUserDropdownOpen = false;
  searchQuery = '';

  menuItems: MenuItem[] = [
    { label: 'Home', routerLink: '/home' },
    { label: 'Manage', routerLink: '/manage' },
    { label: 'About Us', routerLink: '/about' }
  ];

  userMenuItems: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-user' },
    { label: 'Settings', icon: 'pi pi-cog' },
    { label: 'Logout', icon: 'pi pi-power-off' }
  ];

  isHomeRoute = false;
  private readonly router: Router = inject(Router);
  private readonly ref = inject(DestroyRef);

  constructor() {
    this.router.events
      .pipe(takeUntilDestroyed(this.ref), filter(event => event.type === EventType.NavigationEnd))
      .subscribe(({ url }) => this.isHomeRoute = ['/home', '/'].includes(url));
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleUserDropdown(): void {
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }

  handleSearch(): void {
    console.log('Searching for:', this.searchQuery);
  }
}
