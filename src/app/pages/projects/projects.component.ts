import { Component } from '@angular/core';
import { Projects } from 'src/app/interfaces/projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public projects: Projects[] = [
    {
      title: 'NathyApp',
      image: 'assets/images/project-1.png',
      description: 'NathyApp is born from the need of a family business, where all notes were handled on paper, running high risks of losing valuable information from all our customers, in addition to the fact that it was tedious to register a new customer, looking for specific customer information in the midst of hundreds of them. That is the need that satisfies NathyApp, have at hand information of our customers, their credits, payments and credit history. Angular is used in the FrontEnd and Node with express in the BackEnd',
      demo: 'https://nathyapp.live',
      repo: 'https://github.com/poca852/nathy-app-v2-front',
      notes: 'To check the demo, you must log in with the following credentials: user: test, password: 229497'
    },

    {
      title: 'Aseguramaletas',
      image: 'assets/images/project-2.png',
      description: 'Aseguramaletas is a request of a customer who already had a business in operation, which is to sell luggage insurance, in the users can consult the benefits that insurance can offer, they can buy their insurance in addition to verifying their insurance, has also an administrative panel, where you can manage users, and validate tickets purchased.',
      demo: 'https://aseguramaletas.com',
      repo: 'https://github.com/poca852/aseguramaletas-fron'
    }
  ]
}
