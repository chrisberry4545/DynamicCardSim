import { Component, Input } from '@angular/core';

@Component({
    selector: 'nav-bar',
    template: `
        <div class="c-nav-bar o-vertical-spacing">

            <span class="c-nav-bar__item c-nav-bar__item--app-title">
                {{appTitle}}
            </span>

            <a class="c-nav-bar__item">
                Booster Simulator
            </a>

            <a class="c-nav-bar__item">
                Browse Sets
            </a>

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

    `]
})

export class NavBarComponent {
    @Input()
    appTitle: string;
}
