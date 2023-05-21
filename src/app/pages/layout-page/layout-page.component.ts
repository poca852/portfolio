import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../services//theme-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.components.css']
})
export class LayoutPageComponent implements OnInit {

  public widthScreen: any;
  public heightScreen: any;

  public sidebarItems = [
    {
      label: 'Home',
      url: '/',
      icon: 'home'
    },

    {
      label: 'Projects',
      url: 'projects',
      icon: 'important_devices'
    },

    {
      label: 'About me',
      url: 'about-me',
      icon: 'person'
    }
  ]

  constructor(
    public themeService: ThemeService
  ){}

  ngOnInit(): void {
    this.widthScreen = window.innerWidth
    this.heightScreen = window.innerHeight

    console.log(this.heightScreen, this.widthScreen)
  }

  get dark_mode(){
    return this.themeService.darkMode
  }

  @HostListener('window:resize', ['$event'])
  onResizeWindow(){
    this.widthScreen = window.innerWidth
    this.heightScreen = window.innerHeight
  }

  // para cambiar el theme
  changeTheme(): void {
    this.themeService.setTheme(!this.dark_mode)
  }

  openOtherSite(url: string): void {
    window.open(url, '_blank')?.focus()
  }
}
