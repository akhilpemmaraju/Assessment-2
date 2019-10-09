import { Component, OnInit } from '@angular/core';
import { Personal } from 'src/personal';
import { Educational } from 'src/educational';
import { DataService } from '../data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  id:number=0;
  name:string;
  dob:string;
  address:string;
  phone:number;
  degree:string;
  marks:string;
  college:string;
  stream:string;

  newPerson:Personal;
  newEducation:Educational;

  //dependency injection code
  constructor(private svc:DataService) { }

  ngOnInit() {
  }

  createPersonal(){
    ++this.id;
    this.newPerson=new Personal(this.id,this.name,this.dob,this.address,this.phone);
    console.log(this.newPerson);
    this.svc.createp(this.newPerson);
  }

  createEducational(){
    ++this.id;
    this.newEducation=new Educational(this.id,this.degree,this.marks,this.college,this.stream);
    console.log(this.newEducation);
    this.svc.createe(this.newEducation);
    this.reset();
  }

  reset(){
    this.name="";
    this.dob="";
    this.phone=NaN;
    this.address="";
    this.degree="";
    this.marks="";
    this.college="";
    this.stream="";
  }

}
