import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  // Inputs
  @Input() title: string = '';
  @Input() value: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
