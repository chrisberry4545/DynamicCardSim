import { Component, Input} from '@angular/core';

import { CardCollection } from '../models/card-collection';

import { CardDetailComponent } from '../components/card-detail.component';

@Component({
    selector: 'card-collection',
    template: `
        <div class="c-card-collection o-vertical-spacing c-card " *ngIf="cardCollection">
            <div class="c-card-collection__card" *ngFor="let card of cardCollection.cards">
                <card-detail [card]="card"></card-detail>
            </div>
        </div>
    `,

    styles: [`

        .c-card-collection {
            text-align: center;
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
}
