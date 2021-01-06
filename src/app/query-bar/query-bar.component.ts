import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-query-bar',
  templateUrl: './query-bar.component.html',
  styleUrls: ['./query-bar.component.scss'],
})
export class QueryBarComponent implements OnInit {


  query: FormGroup;
  wordRegex: RegExp = /^\s*[A-Za-z]+\s*$/;

  @Input()
  makeQuery!: (word: string, data: string) => void;


  constructor(private formBuilder: FormBuilder) { 
    this.query = this.formBuilder.group({
      word: ['', [Validators.pattern(this.wordRegex), Validators.maxLength(20)]],
      data: 'quotes'
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.query.valid) {
      const word: string = (this.query.controls.word.value as string).trim().toLowerCase();
      const data: string = this.query.controls.data.value;
      console.log(word, data);
      this.makeQuery(word, data);
    } else {
      console.log(this.query.errors);
    }
  }

}
