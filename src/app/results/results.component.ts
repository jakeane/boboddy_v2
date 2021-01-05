import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input()
  acronyms!: string[];

  constructor() { }

  ngOnInit(): void {
  }

  getAcro(acronym: string): string {
    return acronym.split(' ').map((word) => {
      return `<b>${word[0].toLocaleUpperCase()}</b>${word.slice(1)}`
    }).join('<br>');
  }

}
