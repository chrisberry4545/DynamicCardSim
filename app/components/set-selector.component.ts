import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'set-selector',
    template: `
        <div class="c-set-selector c-card">
            Set Selector -
            <select [(ngModel)]="selectedSet" (ngModelChange)="selectChanged()">
                <option *ngFor="let set of setNames" value="{{set}}">
                    {{set}}
                </option>
            </select>

        </div>
        `,
    styles: [`
        .c-set-selector {

        }
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
