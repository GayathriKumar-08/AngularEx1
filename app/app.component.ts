
import { Component } from '@angular/core';
import City from './Model/City'
import { product } from './Model/product';
import { Router } from '@angular/router';
import { ProductService } from './service/product.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MysecondEx';


  public len: number = 0;
  mycities: City[] = [];
  SelectedCity: City = new City();

  myproduct: product[] = [];

  constructor(private route: Router,pservice:ProductService) {
    this.mycities = [
      { id: 1, cName: "Chennai", countryName: "India" },
      { id: 2, cName: "Kerala", countryName: "India" },
      { id: 3, cName: "KaniyaKumari", countryName: "India" }
    ];

    this.myproduct = [
      { pid: 1, pname: "pen", pdescription: "Blue Gel Pen", pcost: 8 },
      { pid: 2, pname: "pencil", pdescription: "Natraj Pencil", pcost: 4 },
      { pid: 3, pname: "eraser", pdescription: "Apsara", pcost: 5 },
      { pid: 4, pname: "sharpner", pdescription: "Apsara", pcost: 8 }
    ];

  }
  public handleClick(c: City) {
    this.SelectedCity = c;
    console.log(this.SelectedCity);
  }
  public handleAddProd(p: product) {
    console.log(JSON.stringify(this.myproduct))
    this.myproduct.push(p);
  }
  public handleRemoveProd(id: number) {
    console.log("Removed id is:" + id);
    this.myproduct.forEach((item, index) => {
      if (item.pid == id) {
        this.myproduct.splice(index, 1);
      }
    });
    
  }
  handleupdateprod(id:any)
  {
    this.myproduct.forEach((item, index) => {
      this.myproduct.push(id);
    });
  }
  public handleMp() {
    console.log("Hello");
    this.route.navigate(["mainpage"]);
  }

}
