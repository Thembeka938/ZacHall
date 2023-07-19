import { Component } from '@angular/core';

@Component({
  selector: 'app-top-right',
  templateUrl: './top-right.component.html',
  styleUrls: ['./top-right.component.scss']
})
export class TopRightComponent {

  icons: string[] = ['videocam', 'phone', '|', 'search', 'expand_more'];

}
