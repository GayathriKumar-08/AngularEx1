import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/Model/auth';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class USAComponent implements OnInit {

  ssn: string;
  pass:number;

  auth: Auth;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  handleUsa() {
    let auth = {
      ssn: this.ssn,
      pass: this.pass
    }
    sessionStorage.setItem("auth", JSON.stringify(auth));
    console.log(auth);
  }
  handleBackUSAtoM()
  {
    console.log("Hello");
     this.route.navigate(["mainpage"]);
  }
}

