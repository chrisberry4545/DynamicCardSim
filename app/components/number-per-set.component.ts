import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NumberPerSet } from '../models/number-per-set';

@Component({
    selector: 'number-per-set',
    template: `
        <div class="number-per-set">

            <div *ngFor="let numInSet of numbersPerSet">

                <label class="number-per-set__label" [attr.for]="numInSet.setName">{{numInSet.setName}}</label>
                <input class="number-per-set__input" [attr.id]="numInSet.setName" type="number" [(ngModel)]="numInSet.number" (ngModelChange)="modelChanged()"/>

            </div>

        </div>
    `,

    styles: [`

        .number-per-set {
            text-align: center;
        }

            .number-per-set__label {

            }

            .number-per-set__input {
                
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
