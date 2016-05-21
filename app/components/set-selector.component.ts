import {Component, Input, Output, EventEmitter} from '@angular/core';

import { CardsService } from '../services/cards.service';

@Component({
    selector: 'set-selector',
    template: `
        <div class="booster-simulator">
            Set Selector -
            {{gameName}}
            <select [(ngModel)]="selectedSet" (ngModelChange)="selectChanged()">
                <option *ngFor="let set of setNames" value="{{set}}">
                    {{set}}
                </option>
            </select>

        </div>
        `,
    providers: [CardsService],
    styles: [`

    `]
})

export class SetSelectorComponent {
  @Input()
  gameName: string;

  @Output()
  currentSetChange: EventEmitter<string> = new EventEmitter()

  setNames: string[];

  selectedSet: string;

  constructor(private cardsService: CardsService) { }

  selectChanged() {
      console.log(this.selectedSet);
      this.currentSetChange.emit(this.selectedSet);
  }

  getSetNames() {
      var self = this;
      this.cardsService.getSetNamesInGame(this.gameName).then(function(setNames) {
          self.setNames = setNames;
      });
    // this.cardsService.openBooster('Fates Collide', this.gameName).then(cards => this.cardCollection.cards = cards);
  }

  ngOnInit() {
      this.getSetNames();
  }
}
