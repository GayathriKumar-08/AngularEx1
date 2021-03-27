import { Component, Input} from '@angular/core';
import product from './Model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public textWords:string="!!!!Colorful Flowers[one way binding...]!!!!"
  public textWords1:string="Two way binding Example!!!!";
  public myName:string="Hi iam a flower";
  public name:string="Two way binding....."
  public gUrl:string="https://i.pinimg.com/originals/8d/3b/9c/8d3b9c195ab5c95a2af26182e6667c9b.gif";
  public gUrl1:string="https://i.pinimg.com/originals/78/a5/90/78a590ec30a7a79be6b857eadf37b025.gif";
  title = 'This is my title';
  
  public signupimg:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHdQradxZpF8vQpYESSdlpHndHE1rCeJpvw&usqp=CAU";
  
  public myproduct:product[]=[];
  constructor(){
    this.myproduct=[
      {pid:1,pname:"pen",pdescription:"Blue Gel Pen",pcost:8},
      {pid:2,pname:"pencil",pdescription:"Natraj Pencil",pcost:4},
      {pid:3,pname:"eraser",pdescription:"Apsara",pcost:5}
    ];
    setTimeout(()=>{
     this.gUrl=this.gUrl1;
    },5000)
  }
  text = ''; 
  onKeyUp(x:any) {
    this.text += x.target.value + '|'; 
  } 
  txt=" ";
  onKeyUp1(y:any) {
    this.txt += y.target.value; 
  } 
  t=" ";
  onEnterKey(z:any) {
    this.t += z.target.value; 
  } 
  btn=" ";
  onClick()
  {
    alert("you have clicked me");
    this. btn="you clicked me!!!"
  }
 
  onClick1(n:any,p:any,b:any,c:any)
  {
  console.log(n+" "+p+" "+b+" "+c);
  }
  
  
}
