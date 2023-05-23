import { Component, Input } from '@angular/core';
import { Projects } from 'src/app/interfaces/projects.interface';
import { LayoutService } from 'src/app/services/layout.service';
import { ThemeService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-card-poject',
  templateUrl: './card-poject.component.html',
  styleUrls: ['./card-poject.component.scss']
})
export class CardPojectComponent {

  @Input()
  public project!: Projects;

  constructor(
    public themeService: ThemeService,
    private layoutService: LayoutService
  ){}

  openWindow(url: string): void {
    this.layoutService.openNewWindow(url);
  }
}
