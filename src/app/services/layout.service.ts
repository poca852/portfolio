import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu.interface';
import { David } from '../interfaces/david.interface';
import { ThemeService } from './theme-service.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public menu: Menu[] = [
    {
      label: 'Home',
      url: '/',
      icon: 'home'
    },

    {
      label: 'Projects',
      url: 'projects',
      icon: 'important_devices'
    }
  ];

  public david: David = {
    social: [
      {
        label: 'Twitter',
        url: 'https://twitter.com/david_cuspoca',
        icon: 'fa-brands fa-twitter'
      },
      {
        label: 'Linkedin',
        url: 'https://linkedin.com/in/davidcuspoca',
        icon: 'fa-brands fa-linkedin'
      },
      {
        label: 'GitHub',
        url: 'https://github.com/poca852',
        icon: 'fa-brands fa-github'
      },
    ]
  }

  constructor(
    private themeService: ThemeService
  ) { };

  get darkMode(): boolean{
    return this.themeService.darkMode
  }

  openNewWindowByUrl(url: string): void {
    window.open(url, '_blank')?.focus();
  };

  openNewWindow(url: string): void {
    window.open(url, '_blank')?.focus;
  }
};
