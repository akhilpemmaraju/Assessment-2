import { Component, OnInit } from '@angular/core';
import { Personal } from 'src/personal';
import { Educational } from 'src/educational';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  array1: Personal[]=[];
  array2: Educational[]=[];

  constructor(public dataservice: DataService) { }

  ngOnInit() {
    this.array1 = this.dataservice.dispp();
    this.array2 = this.dataservice.dispe();
  }
  
  remv(i){
    this.array1.splice(i,1);
    this.array2.splice(i,1);
  }
 
}
