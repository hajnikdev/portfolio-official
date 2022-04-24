import { Component, OnInit, Input } from '@angular/core';

export interface Roll {
  digits: Array<number>;
  index: number;
}

@Component({
  selector: 'app-odometer',
  templateUrl: './odometer.component.html',
  styleUrls: ['./odometer.component.scss'],
})
export class OdometerComponent implements OnInit {
  @Input() endValue: number = 0;
  valueReady: boolean = false;
  valueArray: number[] = [];
  valueArrayOptions: Roll[] = [];
  //Array<Array<{index: number,digit: number, speed: number}>> = []

  constructor() {}

  ngOnInit() {
    this.initNumber();
    setTimeout(() => {
      this.valueReady = true;
    }, 50);
    setTimeout(() => {
      this.roll();
    }, 250);
  }

  initNumber() {
    this.endValue = this.endValue;
    this.valueArray = this.endValue?.toString(10).split('').map(Number);
    this.valueArrayOptions = [];
    this.valueArray.forEach((val, idx) => {
      this.valueArrayOptions.push({ digits: [0], index: 0 });
      for (let index = 1; index <= val; index++) {
        this.valueArrayOptions[idx].digits.push(index);
      }
    });
  }

  roll() {
    this.valueArrayOptions.forEach((option, index) => {
      if (index === 0) {
        option.index = this.valueArray[index];
      } else {
        let lastItem = option.digits[option.digits.length - 1];
        let i = lastItem + 1;
        while (i <= 9) {
          option.digits.push(i);
          i++;
        }
        i = 0;
        option.digits.push(i);
        while (i <= lastItem) {
          option.digits.push(i);
          i++;
        }

        option.index = option.digits.length - 1;
      }
    });
  }
}
