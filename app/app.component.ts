import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { SealedSimulatorComponent } from './components/sealed-simulator.component';
import { BoosterSimulatorComponent } from './components/booster-simulator.component';
import { SetBrowserComponent } from './components/set-browser.component';

import { NavBarComponent } from './components/nav-bar.component';

@Component({
    selector: 'my-app',
    template: `
        <div>

            <nav class="c-nav-bar o-vertical-spacing">

                <span class="c-nav-bar__item c-nav-bar__item--app-title">
                    {{title}}
                </span>

                <a [routerLink]="['/boosters']" class="c-nav-bar__item">
                    Booster Simulator
                </a>

                <a [routerLink]="['/set-browser']" class="c-nav-bar__item">
                    Browse Sets
                </a>

                <a [routerLink]="['/sealed']" class="c-nav-bar__item">
                    Sealed Simulator
                </a>

            </nav>
            <router-outlet></router-outlet>



        </div>
        `,

    //bgreen #006A65

    styles: [`

        .c-nav-bar {
            background: #52344D;
            height: 60px;
            margin-top: 0;
            padding: 0;
        }

            .c-nav-bar__item {
                color: #FFF;
                line-height: 60px;
                margin-left: 10px;
                padding-left: 10px;
                padding-right: 10px;
                margin-right: 10px;
                border-right: 1px solid #FFF;
            }

                .c-nav-bar__item:last-child {
                    border-right: none;
                }

                .c-nav-bar__item--app-title {

                }

                .router-link-active {
                    color: grey;
                }

    `],
    directives: [SealedSimulatorComponent, BoosterSimulatorComponent, SetBrowserComponent, ROUTER_DIRECTIVES ]
})
@Routes([
    {path: '/boosters', component: BoosterSimulatorComponent },
    {path: '/set-browser', component: SetBrowserComponent},
    {path: '/sealed', component: SealedSimulatorComponent }
])
export class AppComponent {
  title = gameName;
}


var gameName = 'Pokemon'
