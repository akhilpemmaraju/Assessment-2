export class Educational{

    id:number;
    degree:string;
    marks:string;
    stream:string;
    college:string;

    constructor(id:number,degree:string,marks:string,stream:string,college:string){
        this.id=id;
        this.degree=degree;
        this.marks=marks;
        this.stream=stream;
        this.college=college;
    }
}