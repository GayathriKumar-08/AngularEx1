import { Injectable } from '@angular/core';
import { product } from '../Model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private getMyProduct():product[] {
    
    let myproduct = [
      { pid: 1, pname: "pen", pdescription: "Blue Gel Pen", pcost: 8 },
      { pid: 2, pname: "pencil", pdescription: "Natraj Pencil", pcost: 4 },
      { pid: 3, pname: "eraser", pdescription: "Apsara", pcost: 5 }
    ];
    return myproduct;
  }
  public getMyprodt():product[]
  {
     return this.getMyProduct();
  }
  public getMyproduct(idx:number):product
  {
     return this.getMyProduct().filter(c=>c.pid=idx)[0];
  }
 public addProduct(p:product)
  {
    this.getMyProduct().push(p);
  }
  public removeCountyr(idx:number){
  this.getMyProduct().forEach((item, index) => {
   if (item.pid = idx) {
     this.getMyProduct().splice(index, 1);
   }
  });
}
}
