import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card';

@Component({
    selector: 'card-detail',
    template: `
        <div class="c-card-detail" *ngIf="card">
            <span *ngIf="c-card.image == ''">{{card.name}}</span>
            <img class="c-card-detail__image" src="{{card.image}}" />
        </div>
    `,
    styles: [`

        .c-card-detail {
            cursor: pointer;
        }

            .c-card-detail__image {
                width: 250px;
                transform: scale(1,1);
                transition: all 0.5s ease;
            }

                .c-card-detail__image:hover {
                    animation: up-bump 0.5s ease;
                }

            @keyframes up-bump {
              0% { transform: scale(1, 1); }
              50% { transform: scale(1.1, 1.1); box-shadow: 0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12); }
              100% { transform: scale(1); }
            }

    `]
})

export class CardDetailComponent{
    @Input()
    card: Card;
}
