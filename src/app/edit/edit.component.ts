import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Personal } from 'src/personal';
import { Educational } from 'src/educational'
import { element } from 'protractor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  name: string;
  dob: string;
  address: string;
  phone:number;
  degree:string;
  marks:string;
  college:string;
  stream:string;
  person: Personal;
  education: Educational;
  employeeId: number;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.employeeId =parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.persons.forEach(element => {
      if(element.id==this.employeeId){
        this.person=element;
      }
    });
    this.name=this.person.name;
    this.dob=this.person.dob;
    this.address=this.person.address;
    this.phone=this.person.phone;

    this.svc.educations.forEach(element =>{
      if(element.id==this.employeeId){
        this.education=element;
      }
    });
    this.degree=this.education.degree;
    this.college=this.education.college;
    this.marks=this.education.marks;
    this.stream=this.education.stream;
  }

  editPersonal() {
    this.person.name=this.name;
    this.person.dob=this.dob;
    this.person.address=this.address;
    this.svc.persons[this.svc.persons.indexOf(this.person)] = this.person;
    console.log(this.route.snapshot.firstChild);
    console.log(this.route.snapshot.data);
    console.log(this.route.snapshot.paramMap.keys);
    this.reset();
  }
  editEducational(){
    this.education.degree=this.degree;
    this.education.marks=this.marks;
    this.education.college=this.college;
    this.education.stream=this.stream;
    this.svc.educations[this.svc.educations.indexOf(this.education)] = this.education;
    console.log(this.route.snapshot.firstChild);
    console.log(this.route.snapshot.data);
    console.log(this.route.snapshot.paramMap.keys);
    this.reset();
  }
  reset(){
    this.name="";
    this.dob="";
    this.address="";
    this.phone=NaN;
    this.degree="";
    this.marks="";
    this.college="";
    this.stream="";
  }
}