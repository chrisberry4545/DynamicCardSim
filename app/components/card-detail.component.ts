import { Component, Input} from '@angular/core';
import { Card } from '../models/card';

@Component({
    selector: 'card-detail',
    template: `
        <div class="card-detail" *ngIf="card">
            <span *ngIf="card.image == ''">{{card.name}}</span>
            <img class="card-detail__image" src="{{card.image}}" />
        </div>
    `,
    styles: [`

        .card-detail {
        }

            .card-detail__image {
                width: 250px;
                transition: all 0.2s ease;
            }

                .card-detail__image:hover {
                    animation: up-bump 0.2s ease;
                }

            @keyframes up-bump {
              0% { transform: translateY(0); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0); }
            }

    `]
})

export class CardDetailComponent{
    @Input()
    card: Card;
}
