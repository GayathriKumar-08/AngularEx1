import { Component, Input, OnInit} from '@angular/core';
import product from "src/app/Model/product";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input()
  products:product[]=[];

  public prod: product = new product(0,"","",0);

  constructor() {
   }

  ngOnInit(): void {
  }
  handleAddProd()
  {
    console.log(JSON.stringify(this.prod));
  }
}
