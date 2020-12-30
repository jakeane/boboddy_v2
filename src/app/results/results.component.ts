import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  topAcro = "testing exact silly things";

  constructor() { }

  ngOnInit(): void {
  }

  getAcro(acronym: string): string {
    return acronym.split(' ').map((word) => {
      return `<b>${word[0].toLocaleUpperCase()}</b>${word.slice(1)}`
    }).join('<br>');
  }

}
