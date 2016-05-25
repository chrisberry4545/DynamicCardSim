import { Component, Input} from '@angular/core';

import { CardCollection } from '../models/card-collection';

import { CardDetailComponent } from '../components/card-detail.component';

@Component({
    selector: 'card-collection',
    template: `
        <div class="card-collection" *ngIf="cardCollection">
            <div class="card-collection__card" *ngFor="let card of cardCollection.cards">
                <card-detail [card]="card"></card-detail>
            </div>
        </div>
    `,

    styles: [`

        .card-collection {
            text-align: center;
        }

            .card-collection__card {
                display: inline-block;
            }

    `],

    directives: [CardDetailComponent]
})

export class CardCollectionComponent {
    @Input()
    cardCollection: CardCollection;
}
