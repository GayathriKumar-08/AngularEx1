import BaseModel from './BaseModel'
export class product extends BaseModel {
    constructor(pid:number,pname:string,pdescription:String,pcost:number)
    {
        super();
        this.pid=pid;
        this.pname=pname;
        this. pdescription= pdescription;
        this.pcost=pcost;

    }
    pid:number;
    pname:string="";
    pdescription:String="";
    pcost:number=0;


}
