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

            <button class="c-booster-simulator__button" (click)="getCards()">Open boosters</button>
        </div>
        `,
    directives: [CardCollectionComponent, NumberPerSetComponent],
    providers: [CardsService],
    styles: [`

        .c-booster-simulator {
            margin-bottom: 200px;
        }

            .c-booster-simulator__button {
                width: 150px;
                height: 50px;
                position: fixed;
                bottom: 30px;
                right: 0;
                margin-right: 20px;
                background: #006A65;
                color: white;
                font-size: 16px;
                box-shadow: 2px 4px 3px 1px rgba(0,0,0,.2),0 2px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);
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
      this.numbersPerSet = [];
      this.initNumbersPerSet();
  }
}
