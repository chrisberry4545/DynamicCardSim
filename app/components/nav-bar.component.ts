import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    template: `
        <div class="nav-bar">

            <a class="nav-bar__item">
                Test Link.
            </a>

        </div>
    `,

    styles: [`

        .nav-bar {
            text-align: center;
        }

            .nav-bar__item {

            }

    `]
})

export class NavBarComponent {
}
