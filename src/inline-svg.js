import {bindable, containerless, customElement, inject, inlineView} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@containerless()
@inlineView('<template></template>')
@customElement('inline-svg')
@inject(Element, HttpClient)
export class InlineSvg {
    @bindable svg;

    hans = HTMLElement;
    http = HttpClient;

    constructor(hans = HTMLElement, http = HttpClient) {
        this.hans = hans;
        this.http = http;
    }

    svgChanged(svg) {
        if (svg) {
            this.http.fetch(`svg/${svg}`)
                .then(response => response.text())
                .then(response => this.hans.parentElement.innerHTML = response);
        }
    }

}