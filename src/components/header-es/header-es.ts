import { Component, Input } from '@angular/core';

/**
 * Generated class for the HeaderEsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-es',
  templateUrl: 'header-es.html'
})
export class HeaderEsComponent {

  @Input() title: string;

  constructor() {
    console.log("Titolo:",this.title)
  }

}
