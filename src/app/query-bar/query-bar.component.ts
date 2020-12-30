import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-query-bar',
  templateUrl: './query-bar.component.html',
  styleUrls: ['./query-bar.component.scss'],
})
export class QueryBarComponent implements OnInit {

  query = new FormGroup({
    word: new FormControl(''),
    data: new FormControl('data1'),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('submit');
    console.log(this.query.controls.word.value);
    // only one word
  }

}
