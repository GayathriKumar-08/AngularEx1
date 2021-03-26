import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
   
 optionSelected:string;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
 
  onNavigate(e:any)
  {
   this.optionSelected=e.target.value;
    if(this.optionSelected==='India')
    {
      console.log("Hello iam India");
        this.route.navigate(["india"]);
    }
    else if(this.optionSelected==='USA')
    {
      console.log("Hello iam USA");
        this.route.navigate(["usa"]);
    }
    else if(this.optionSelected==='UK')
    {
      console.log("Hello iam UK");
        this.route.navigate(["uk"]);
    }
  }
}
