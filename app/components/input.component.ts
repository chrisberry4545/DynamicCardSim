import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'input-component',
    template: `
        <div>
            <label>{{label}}</label>
            <input type="number" [(ngModel)]="currentValue"  (ngModelChange)="inputChanged()"/>
        </div>
        `,
    styles: [`

    `]
})

export class InputComponent {
  @Input()
  label: string;

  @Input()
  startingValue: string;

  @Output()
  valueChanged: EventEmitter<string> = new EventEmitter()

  currentValue: string;

  inputChanged() {
      this.startingValue = this.currentValue;
      this.valueChanged.emit(this.currentValue);
  }

  ngOnInit() {
      this.currentValue = this.startingValue;
  }
}
