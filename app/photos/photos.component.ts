import { Component, OnInit } from '@angular/core';
import { FinanceIncome, GlobalService } from '../global.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  imagelist: any=[];
  Btn:string='compare';
  Btn1: string='';
  constructor(private global:GlobalService) { }

  ngOnInit(): void {
    this.global.getDetails().subscribe((res)=>{
      for(let i=0;i<10;i++){
        this.imagelist.push(res[i]);
        console.log(this.imagelist)
      }
      
    })
  }
  add(img:any){
    if(img.id){
      this.Btn1="remove";
    }
  
  this.Btn='';
  this.global.receivetab(img);

  }
  remove(img:any){

  }
}
