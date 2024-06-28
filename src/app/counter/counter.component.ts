import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
   counter {{counter}}
<hr>
<button (click)="increaseBy(1)">+1</button>
<button (click) = "increaseBy(-1)">-1</button>
<button (click) = "reset()">reset</button>
  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  counter = 10;

  increaseBy(value:number):void{
     this.counter += value;
  }
  reset():void{
    this.counter = 10 ;
 }
}


