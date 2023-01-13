import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TAbsComponent {
@Input() Tabs = [
  {TabName:'',TabRoute:''},
  {TabName:'',TabRoute:''},
  {TabName:'',TabRoute:''}
];

}
