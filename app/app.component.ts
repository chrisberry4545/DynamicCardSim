import {Component} from '@angular/core';

import { BoosterSimulatorComponent } from './components/booster-simulator.component';
import { SetBrowserComponent } from './components/set-browser.component';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <h1>{{title}}</h1>

            <booster-simulator [gameName]="title"></booster-simulator>
        </div>
        `,

        // <set-browser [gameName]="title" ></set-browser>
    directives: [BoosterSimulatorComponent, SetBrowserComponent]
})
export class AppComponent {
  title = gameName;
}


var gameName = 'Pokemon'
