import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/Model/auth';

@Component({
  selector: 'app-uk',
  templateUrl: './uk.component.html',
  styleUrls: ['./uk.component.css']
})
export class UKComponent implements OnInit {

  pwd:string;
  auth:Auth;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  handleUk()
  {
    let auth={
      pwd:this.pwd
    }
    sessionStorage.setItem("auth",JSON.stringify(auth));
    console.log(auth);
  }
  handleBackUKtoM()
  {
    console.log("Hello");
     this.route.navigate(["mainpage"]);
  }
}
