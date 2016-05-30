import {Component, Input} from '@angular/core';

import {CardCollection} from '../models/card-collection';
import {NumberPerSet} from '../models/number-per-set';

import { CardCollectionComponent } from '../components/card-collection.component';
import { NumberPerSetComponent } from '../components/number-per-set.component';

import { CardsService } from '../services/cards.service';

@Component({
    selector: 'booster-simulator',
    template: `
        <div class="c-booster-simulator">

            <number-per-set [numbersPerSet]="numbersPerSet" (numbersPerSetChanged)="numbersPerSetChanged($event)"></number-per-set>

            <card-collection [cardCollection]="cardCollection"></card-collection>

            <button class="c-button c-button--floating" (click)="getCards()">Open boosters</button>
        </div>
        `,
    directives: [CardCollectionComponent, NumberPerSetComponent],
    providers: [CardsService],
    styles: [`

        .c-booster-simulator {
            margin-bottom: 200px;
        }

    `]
})

export class BoosterSimulatorComponent {
  @Input()
  gameName: string;

  numbersPerSet: NumberPerSet[];

  constructor(private cardsService: CardsService) { }

  cardCollection: CardCollection = {
      id: 1,
      name: "Test Card Collection",
      cards: []
  }

  numbersPerSetChanged(numbersPerSet: NumberPerSet[]) {
      this.numbersPerSet = numbersPerSet;
  }

  getCards() {
    this.cardsService.openBooster(this.numbersPerSet, this.gameName).then(cards => this.cardCollection.cards = cards);
  }

  initNumbersPerSet() {
      var self = this;
       this.cardsService.getSetNamesInGame(this.gameName).then(function(setNames) {

          setNames.forEach(function(name, index) {
              self.numbersPerSet.push({setName: name, number: index == 0 ? 3 : 0});
          });

      });
  }

  ngOnInit() {
      this.gameName = this.cardsService.getGameName();
      this.numbersPerSet = [];
      this.initNumbersPerSet();
  }
}
