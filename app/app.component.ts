import {Component} from '@angular/core';
// import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { SealedSimulatorComponent } from './components/sealed-simulator.component';
import { BoosterSimulatorComponent } from './components/booster-simulator.component';
import { SetBrowserComponent } from './components/set-browser.component';

import { NavBarComponent } from './components/nav-bar.component';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <nav-bar [appTitle]="title"></nav-bar>

            <sealed-simulator [gameName]="title"></sealed-simulator>

        </div>
        `,

                    // <booster-simulator [gameName]="title"></booster-simulator>
        // <set-browser [gameName]="title" ></set-browser>
    directives: [SealedSimulatorComponent, BoosterSimulatorComponent, SetBrowserComponent, NavBarComponent] //ROUTER_DIRECTIVES
})
// @Routes([
//   {path: '/booster-simulator', component: BoosterSimulatorComponent},
//   {path: '/set-browser',        component: SetBrowserComponent}
// ])
export class AppComponent {
  title = gameName;
}


var gameName = 'Pokemon'
