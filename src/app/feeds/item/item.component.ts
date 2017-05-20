import { Component, Input } from '@angular/core';

@Component({
  selector: 'hn-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  //@Input('CustomAttribute Name')
  @Input() item;

}
