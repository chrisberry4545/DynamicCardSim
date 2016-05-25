import {Component, Input} from '@angular/core';

import {CardCollection} from '../models/card-collection';
import {NumberPerSet} from '../models/number-per-set';

import { CardCollectionComponent } from '../components/card-collection.component';
import { NumberPerSetComponent } from '../components/number-per-set.component';

import { CardsService } from '../services/cards.service';

@Component({
    selector: 'booster-simulator',
    template: `
        <div class="booster-simulator">
            <h1 class="booster-simulator__title">{{title}}</h1>

            <number-per-set [numbersPerSet]="numbersPerSet" (numbersPerSetChanged)="numbersPerSetChanged($event)"></number-per-set>

            <card-collection [cardCollection]="cardCollection"></card-collection>

            <button class="booster-simulator__button" (click)="getCards()">New set</button>
        </div>
        `,
    directives: [CardCollectionComponent, NumberPerSetComponent],
    providers: [CardsService],
    styles: [`

        .booster-simulator {
            margin-bottom: 200px;
        }

            .booster-simulator__button {
                width: 200px;
                height: 100px;
                position: fixed;
                bottom: 30px;
                right: 50%;
                transform: translateX(-50%);
            }

    `]
})

export class BoosterSimulatorComponent {
  title = 'Booster simulator';

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
