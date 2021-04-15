import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-leftpart',
  templateUrl: './leftpart.component.html',
  styleUrls: ['./leftpart.component.css']
})
export class LeftpartComponent implements OnInit {
  @Output() public table= new EventEmitter<any>();


  url:any=null;

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onClickSubmit( data:any) {
  data.filepath=this.url;

  console.log( 'file '  + data.filepath);
  this.table.emit(data);

 }

 
 constructor( ) { }
  ngOnInit(): void {
  }
 
}
