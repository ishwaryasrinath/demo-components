import { Component } from '@angular/core';
import {PageEvent } from '@angular/material';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pageEvent: PageEvent;
  public pageIndex: number = 0;
  public datasource = [];
  public initialEvent : any;
  public list = [{
  item : 'item1'
},
{
  item : 'item2'
},
{
  item : 'item3'
},{
  item : 'item4'
},
{
  item : 'item5'
},
{
  item : 'item6'
},{
  item : 'item7'
},
{
  item : 'item8'
},
{
  item : 'item9'
},
{
  item : 'item10'
},
{
  item : 'item11'
},
{
  item : 'item12'
},
{
  item : 'item13'
},
{
  item : 'item14'
},
{
  item : 'item15'
},
{
  item : 'item16'
},
{
  item : 'item17'
},
{
  item : 'item18'
},
{
  item : 'item19'
},
{
  item : 'item20'
  }]

constructor(){
  this.initialEvent = {length: 20, pageIndex: 0, pageSize: 10, previousPageIndex: 0}
  this.getPagewiseData( this.initialEvent);
}
  getPagewiseData(event?: PageEvent) {
    console.log(event);
    
    this.pageIndex = event.pageIndex;
    let start = 0;
    let end = event.pageSize;
    start = event.pageIndex * event.pageSize;
    end = (event.pageIndex + 1) * event.pageSize;
    this.datasource = [];
    for (let i = start; i < end; i++) {
      if (i < this.list.length) {
        this.datasource.push(this.list[i]);
       
        
      }
      console.log(this.datasource);
    }
  }
}
