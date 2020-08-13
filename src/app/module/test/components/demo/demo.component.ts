import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less'],
  animations: [
    trigger('square', [
      state('green', style({'background-color': 'green', 'height': '100px', 'transform': 'translateX(0)'})),
      state('red', style({'background-color': 'red', 'height': '50px', 'transform': 'translateX(100%)'})),
      transition('green => red', animate('.2s 1s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
      transition('red => green', animate(1000))
    ])
  ]
})
export class DemoComponent implements OnInit {
  squareState: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }

}
