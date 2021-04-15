import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-rightpart',
  templateUrl: './rightpart.component.html',
  styleUrls: ['./rightpart.component.css']
})
export class RightpartComponent implements OnInit {
  @Input() data:any;
  @Output() public rightvalue= new EventEmitter<any>();
  count = 0;
  rightdata:any=[];
  zz:any={};

  increment() {if(this.data.quantity-1>=this.count){
    this.count++;}
    else{alert('limit reached')}
  }

  decrement() {if(this.count>0){
    this.count--;}
  }
  
  cartsendingdata(data:any,count:any){
    data.quantity=data.quantity-count;
    
    this.zz={
      product1:data.product,
      quantity1:data.quantity,
      price1:data.price,
      filepath1:data.filepath,
      val:count
    };
  
    this.fun(data);
    this.rightvalue.emit(this.zz);
  }
  
  fun(data:any){
    
    this.rightdata.push(data); 
  }


  constructor() { };
  ngOnInit(): void {
  };

}
