import {Component, Input} from '@angular/core';

import {CardCollection} from '../models/card-collection';

import { CardCollectionComponent } from '../components/card-collection.component';
import { SetSelectorComponent } from '../components/set-selector.component';

import { CardsService } from '../services/cards.service';

@Component({
    selector: 'set-browser',
    template: `
        <div class="c-set-browser">

            <set-selector *ngIf="setNames" [setNames]="setNames" (currentSetChange)="setChanged($event)"></set-selector>

            <card-collection [cardCollection]="cardCollection"></card-collection>
        </div>
        `,
    directives: [CardCollectionComponent, SetSelectorComponent],
    providers: [CardsService],
    styles: [`
        .c-set-browser {

        }
    `]
})

export class SetBrowserComponent {
  @Input()
  gameName: string;

  setNames: string[];

  value: string;

  constructor(private cardsService: CardsService) { }

  cardCollection: CardCollection = {
      id: 1,
      name: "Test Card Collection",
      cards: []
  }

  setChanged(newSet: string) {
      this.getCardsInSet(newSet);
  }

  getCardsInSet(setName: string) {
      var self = this;
      this.cardsService.getCardsForGame(this.gameName).then(function(gameSet) {
          self.cardCollection.cards = self.cardsService.getCardSet(setName, gameSet).cards;
      });
  }

  setUpSetNames() {
      var self = this;
       this.cardsService.getSetNamesInGame(this.gameName).then(function(setNames) {
          self.setNames = setNames;
      });
  }
  ngOnInit() {
      this.setUpSetNames();
  }
}
