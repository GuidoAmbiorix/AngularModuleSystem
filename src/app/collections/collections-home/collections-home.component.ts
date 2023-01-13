import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
  {name:'James', age:24, job:'Designer',employed:true},
  {name:'James', age:26, job:'Engineer',employed:false},
  {name:'Elyse',age:25,job:'Engineer',employed:true}
  ];

  headers = [
  {key:'name',label:'Name'},
  {key:'age',label:'Age'},
  {key:'job',label:'Job'},
  {key:'employed',label:"Employed"}
  ];

  Tabs = [
    {TabName:'Biography',TabRoute:'./'},
    {TabName:'Companies',TabRoute:'companies'},
    {TabName:'Partners',TabRoute:'partners'}
  ];

  NumbersOfTabs:number = this.Tabs.length;

  classNames = '';

  ngOnInit(): void {
  }

}
