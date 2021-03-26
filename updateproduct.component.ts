import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/Model/product';
import { ProductService } from 'src/app/service/product.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  
  myproduct:product;

  constructor(private aRoute:ActivatedRoute,private pservice:ProductService, private loc:Location) { }

  ngOnInit(): void {
    this.aRoute.params.subscribe(params=>
      {
        console.log("value is"+params['id']);
        this.myproduct=this.pservice.getMyproduct(params['id']);
       } );
  }
  goBack(){
     this.loc.back();
  }
 
}
