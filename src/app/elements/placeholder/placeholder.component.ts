import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {
@Input() Header = true;
@Input() Lines = 3;

constructor(){

}

ngOnInit(){

}
}
