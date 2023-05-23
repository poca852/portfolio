import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public darkMode!: boolean;

  constructor(
    @Inject(DOCUMENT)
    private document: Document
  ) { 
    this.loadTheme()
  }
  
  setTheme(value: boolean): void {
    (value) 
      ? this.document.body.classList.add('dark-mode')
      : this.document.body.classList.remove('dark-mode')

    this.savedTheme(value);
  }

  loadTheme(): void {
    this.darkMode = JSON.parse(localStorage.getItem('dark_mode')!) || false;
    this.setTheme(this.darkMode)
  }

  savedTheme(value: boolean):void {
    this.darkMode = value;
    localStorage.setItem('dark_mode', JSON.stringify(value))
  }

}
