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
  loading: boolean = false;
  skeleton: number[][];
  generationError: boolean = false;
  wordLength: number = 5;

  constructor(private service: AppService) {
    this.skeleton = this.generateSkeletonWidths(0);
  }

  makeQuery = (word: string, data: string): void => {
    this.acronyms = null;
    this.skeleton = this.generateSkeletonWidths(word.length);
    this.loading = true;
    this.generationError = false;

    this.service.getAcronym(word, data).subscribe((result) => {
      this.loading = false;
      // this.skeleton = null;
      if (result.length != 0) {
        this.acronyms = result;
      } else {
        this.generationError = true;
      }
    });
  }
  
  generateSkeletonWidths = (length: number): number[][] => {
    return [...Array(5)].map((_) => [...Array(length)].map((_) => Math.random() * 70 + 30));
  }
}
