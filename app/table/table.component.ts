import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  imagelist: any={};

  constructor(private global:GlobalService) {
    this.global.backToOriginalState.subscribe((res:any)=>{
      this.imagelist=res;
     

      
    })
   }

  ngOnInit(): void {
  }

}
