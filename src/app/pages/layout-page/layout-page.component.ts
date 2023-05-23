import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../services//theme-service.service';
import { Menu } from 'src/app/interfaces/menu.interface';
import { LayoutService } from 'src/app/services/layout.service';
import { Social } from 'src/app/interfaces/david.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.components.scss']
})
export class LayoutPageComponent implements OnInit {


  constructor(
    public themeService: ThemeService,
    public layoutService: LayoutService
  ){}

  ngOnInit(): void {
  }

  get dark_mode(){
    return this.themeService.darkMode
  }

  get menu(): Menu[]{
    return [...this.layoutService.menu]
  }

  get social(): Social[]{
    return [...this.layoutService.david.social]
  }

  // para cambiar el theme
  changeTheme(): void {
    this.themeService.setTheme(!this.dark_mode)
  }

  openOtherSite(url: string): void {
    this.layoutService.openNewWindow(url);
  }
}
