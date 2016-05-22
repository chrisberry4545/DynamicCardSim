import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'set-selector',
    template: `
        <div class="set-selector">
            Set Selector -
            <select [(ngModel)]="selectedSet" (ngModelChange)="selectChanged()">
                <option *ngFor="let set of setNames" value="{{set}}">
                    {{set}}
                </option>
            </select>

        </div>
        `,
    styles: [`

    `]
})

export class SetSelectorComponent {
  @Input()
  setNames: string[];

  @Output()
  currentSetChange: EventEmitter<string> = new EventEmitter()

  selectedSet: string;

  selectChanged() {
      this.currentSetChange.emit(this.selectedSet);
  }

  ngOnInit() {
      this.selectedSet = this.setNames[0];
      this.selectChanged();
  }
}
