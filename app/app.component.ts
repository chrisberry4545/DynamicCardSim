import {Component} from '@angular/core';
// import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { BoosterSimulatorComponent } from './components/booster-simulator.component';
import { SetBrowserComponent } from './components/set-browser.component';

import { NavBarComponent } from './components/nav-bar.component';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <nav-bar></nav-bar>
            <h1>{{title}}</h1>

            <booster-simulator [gameName]="title"></booster-simulator>
        </div>
        `,

        // <set-browser [gameName]="title" ></set-browser>
    directives: [BoosterSimulatorComponent, SetBrowserComponent, NavBarComponent] //ROUTER_DIRECTIVES
})
// @Routes([
//   {path: '/booster-simulator', component: BoosterSimulatorComponent},
//   {path: '/set-browser',        component: SetBrowserComponent}
// ])
export class AppComponent {
  title = gameName;
}


var gameName = 'Pokemon'
