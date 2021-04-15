import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-allfiles',
  templateUrl: './allfiles.component.html',
  styleUrls: ['./allfiles.component.css']
})
export class AllfilesComponent implements OnInit {

 // @Output() public rightdata= new EventEmitter<string>();


  tableData:any[]=[];
  tableData1:any[]=[];
  
  displaySum(item:any){
    this.tableData.push(item); 
  }

  displaySum1(item1:any){
    console.log('price item = '+item1 );
    this.tableData1.push(item1);
    console.log('tab1 = '+this.tableData1);
  }
  
  DeletedItem(values:any){  
    for(var i = this.tableData1.length - 1; i >= 0; i--) {  
    if(this.tableData1[i].product1 === values.product3) {  
    this.tableData1.splice(i, 1); 
    this.tableData[i].quantity=this.tableData[0].quantity+values.val1; 
    }  
    }  
    } 

  constructor() { }

  ngOnInit(): void {
  }

}
