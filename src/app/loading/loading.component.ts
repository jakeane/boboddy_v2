import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input()
  wordLength!: number;

  @Input()
  skeleton!: number[][] | null

  constructor() { }

  ngOnInit(): void {
  }

}
