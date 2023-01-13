import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
@Input() Favorites:number = 0;
@Input() PageViews:number = 0;
@Input() Users:number = 0;
}
