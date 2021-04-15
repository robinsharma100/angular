import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cartside',
  templateUrl: './cartside.component.html',
  styleUrls: ['./cartside.component.css']
})
export class CartsideComponent implements OnInit {
  
  @Input() public dataval:any;
 
  @Output() public cartdelete= new EventEmitter<any>();

  multi:any=0;
  x:any={};
  

  f(){ var aa:any=parseInt(this.dataval.price1);
    var bb:any=parseInt(this.dataval.val);
    this.multi=aa*bb;
    console.log('ddddd == '+this.multi);
  }
  
  constructor() {}

  deleteNode(dataval:any){
    this.x={
      product3:dataval.product1,
      val1:dataval.val
    };
    this.cartdelete.emit(this.x);
  }

  ngOnInit(): void {
    this.f();
  }

}
