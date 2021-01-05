import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent {
  title = 'boboddyv2';

  acronyms: string[] | null = null;

  constructor(private service: AppService) {}

  makeQuery = (word: string, data: string): void => {
    this.acronyms = null;

    this.service.getAcronym(word, data).subscribe((result) => this.acronyms = result);
  }
}
