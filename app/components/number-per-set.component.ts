import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NumberPerSet } from '../models/number-per-set';

@Component({
    selector: 'number-per-set',
    template: `
        <div class="c-number-per-set o-vertical-spacing c-card">

            <div *ngFor="let numInSet of numbersPerSet" class="c-number-per-set__element">

                <label class="c-number-per-set__label" [attr.for]="numInSet.setName">{{numInSet.setName}}</label>
                <input class="c-number-per-set__input" [attr.id]="numInSet.setName" type="number" [(ngModel)]="numInSet.number" (ngModelChange)="modelChanged()"/>

            </div>

        </div>
    `,

    styles: [`

        .c-number-per-set {
            text-align: center;
        }

            .c-number-per-set__element {
                margin-bottom: 20px;
            }

            .c-number-per-set__label {
                margin-right: 10px;
                display: inline-block;
                width: 110px;
                font-size: 16px;
            }

            .c-number-per-set__input {
            }

    `]
})

export class NumberPerSetComponent {
    @Input()
    numbersPerSet: NumberPerSet[];

    @Output()
    numbersPerSetChanged: EventEmitter<NumberPerSet[]> = new EventEmitter()

    selectedSet: string;

    modelChanged() {
        this.numbersPerSetChanged.emit(this.numbersPerSet);
    }
}
