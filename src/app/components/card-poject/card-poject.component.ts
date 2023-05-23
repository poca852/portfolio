import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-card-poject',
  templateUrl: './card-poject.component.html',
  styleUrls: ['./card-poject.component.scss']
})
export class CardPojectComponent {
  constructor(
    public themeService: ThemeService
  ){}

  openWindow(url: string): void {
    this.themeService.openWindow(url);
  }
}
