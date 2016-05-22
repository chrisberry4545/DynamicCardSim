import {Component, Input} from '@angular/core';

import {CardCollection} from '../models/card-collection';

import { CardCollectionComponent } from '../components/card-collection.component';
import { SetSelectorComponent } from '../components/set-selector.component';
import { InputComponent } from '../components/input.component';

import { CardsService } from '../services/cards.service';

@Component({
    selector: 'booster-simulator',
    template: `
        <div class="booster-simulator">
            <h1 class="booster-simulator__title">{{title}}</h1>

            <set-selector *ngIf="setNames" [setNames]="setNames" (currentSetChange)="setChanged($event)"></set-selector>


            {{value}}
            <input-component [label]="'Test input'" [startingValue]="value" ></input-component>

            <card-collection [cardCollection]="cardCollection"></card-collection>

            <button class="booster-simulator__button" (click)="getCards()">New set</button>
        </div>
        `,
    directives: [CardCollectionComponent, SetSelectorComponent, InputComponent],
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

  setNames: string[];

  value: string;

  constructor(private cardsService: CardsService) { }

  cardCollection: CardCollection = {
      id: 1,
      name: "Test Card Collection",
      cards: []
  }

  setChanged(newSet: string) {
      this.getCards(newSet);
  }

  getCards(setName: string) {
    this.cardsService.openBooster(setName, this.gameName).then(cards => this.cardCollection.cards = cards);
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
