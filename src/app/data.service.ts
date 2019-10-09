import { Injectable } from '@angular/core';
  import { from } from 'rxjs';
import { Personal } from 'src/personal';
import { Educational } from 'src/educational';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  persons:Personal[]=[];
  id:number=1;
  constructor() { }

  createp(p:Personal){
    p.id=this.id;
    ++this.id;
    this.persons.push(p);
  }

  educations:Educational[]=[];
  
  createe(e:Educational){
    e.id=this.id;
    ++this.id;
    this.educations.push(e);
  }

  dispp(){
    return this.persons;
  }

  dispe(){
    return this.educations;
  }
}
