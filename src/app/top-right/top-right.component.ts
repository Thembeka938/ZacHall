import { Component } from '@angular/core';

@Component({
  selector: 'app-top-right',
  templateUrl: './top-right.component.html',
  styleUrls: ['./top-right.component.scss']
})
export class TopRightComponent {

  icons: string[] = ['tv', 'phone', '|', 'search', 'keyboard_arrow_down'];

}
