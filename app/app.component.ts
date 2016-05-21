import {Component} from '@angular/core';

import { BoosterSimulatorComponent } from './components/booster-simulator.component';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <h1>{{title}}</h1>

            <booster-simulator [gameName]="title"></booster-simulator>
        </div>
        `,
    directives: [BoosterSimulatorComponent]
})
export class AppComponent {
  title = gameName;
}


var gameName = 'Pokemon'
