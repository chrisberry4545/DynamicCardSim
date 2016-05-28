import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Card } from '../models/card';
import { CardCollection } from '../models/card-collection';

import { CardDetailComponent } from '../components/card-detail.component';

@Component({
    selector: 'card-collection',
    template: `
        <div class="c-card-collection o-vertical-spacing c-card " *ngIf="cardCollection">
            <h3 class="c-card-collection__title">
                {{cardCollection.name}}
            </h3>

            <div class="c-card-collection__card" *ngFor="let card of cardCollection.cards">
                <card-detail (click)="cardClickedFunc(card)" [card]="card"></card-detail>
            </div>
        </div>
    `,

    styles: [`

        .c-card-collection {
            text-align: center;
        }

            .c-card-collection__title {

            }

            .c-card-collection__card {
                display: inline-block;
            }

    `],

    directives: [CardDetailComponent]
})

export class CardCollectionComponent {
    @Input()
    cardCollection: CardCollection;

    @Output()
    cardClicked: EventEmitter<Card> = new EventEmitter();

    cardClickedFunc(card: Card) {
        this.cardClicked.emit(card);
    }
}
