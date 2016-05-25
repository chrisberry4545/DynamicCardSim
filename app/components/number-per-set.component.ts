import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NumberPerSet } from '../models/number-per-set';

@Component({
    selector: 'number-per-set',
    template: `
        <div>

            <div *ngFor="let numInSet of numbersPerSet">

                <label>{{numInSet.setName}}</label>
                <input type="number" [(ngModel)]="numInSet.number" (ngModelChange)="modelChanged()"/>

            </div>

        </div>
    `,

    styles: [`


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
