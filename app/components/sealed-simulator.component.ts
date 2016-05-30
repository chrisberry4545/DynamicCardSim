import {Component, Input} from '@angular/core';

import { Card } from '../models/card';
import {CardCollection} from '../models/card-collection';
import {NumberPerSet} from '../models/number-per-set';

import { CardCollectionComponent } from '../components/card-collection.component';
import { NumberPerSetComponent } from '../components/number-per-set.component';

import { CardsService } from '../services/cards.service';

@Component({
    selector: 'sealed-simulator',
    template: `
        <div class="c-sealed-simulator">

            <number-per-set [numbersPerSet]="numbersPerSet" (numbersPerSetChanged)="numbersPerSetChanged($event)"></number-per-set>

            <card-collection [cardCollection]="cardsInBoosters" (cardClicked)="addCardToSelected($event)"></card-collection>

            <card-collection [cardCollection]="selectedCards" (cardClicked)="removeCardFromSelected($event)" ></card-collection>

            <button class="c-button c-button--floating" (click)="getCards()">Open boosters</button>
        </div>
        `,
    directives: [CardCollectionComponent, NumberPerSetComponent],
    providers: [CardsService],
    styles: [`


    `]
})

export class SealedSimulatorComponent {
  @Input()
  gameName: string;

  numbersPerSet: NumberPerSet[];

  constructor(private cardsService: CardsService) { }

  cardsInBoosters: CardCollection = {
      id: 1,
      name: "Booster Cards",
      cards: []
  }

  selectedCards: CardCollection = {
      id: 2,
      name: 'Selected Cards',
      cards: []
  }

  numbersPerSetChanged(numbersPerSet: NumberPerSet[]) {
      this.numbersPerSet = numbersPerSet;
  }

  addCardToSelected(card: Card) {
      this.cardsService.moveFromArray1ToArray2(this.cardsInBoosters.cards, this.selectedCards.cards, card);
  }

  removeCardFromSelected(card: Card) {
      this.cardsService.moveFromArray1ToArray2(this.selectedCards.cards, this.cardsInBoosters.cards, card);
  }

  getCards() {
    this.cardsService.openBooster(this.numbersPerSet, this.gameName).then(cards => this.cardsInBoosters.cards = cards);
  }

  initNumbersPerSet() {
      var self = this;
       this.cardsService.getSetNamesInGame(this.gameName).then(function(setNames) {

          setNames.forEach(function(name, index) {
              self.numbersPerSet.push({setName: name, number: index == 0 ? 6 : 0});
          });

      });
  }

  ngOnInit() {
      this.gameName = this.cardsService.getGameName();
      this.numbersPerSet = [];
      this.initNumbersPerSet();
  }
}
