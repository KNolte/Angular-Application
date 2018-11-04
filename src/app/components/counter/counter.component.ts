import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  private count = 0;

  constructor() { }

  ngOnInit() {
  }

  private addToCount(n: number) {
    this.count += n;
  }
}
