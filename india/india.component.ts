import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/Model/auth';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
  myname:string="";
   adharno:number=0;
 
   auth:Auth;
   constructor(private route:Router) { }

  ngOnInit(): void {
  }
  handleClickIndia(e:any)
  {
    let auth={
    myname:this.myname,
    adharno:this.adharno
    }
    sessionStorage.setItem("auth",JSON.stringify(auth));
    console.log(auth);
  }
  handleBackItoM()
  {
    console.log("Hello");
     this.route.navigate(["mainpage"]);
  }
}
