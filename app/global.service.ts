import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public msg = new Subject();
    backToOriginalState=this.msg.asObservable();

  constructor( private http: HttpClient) { }
  headers: any = {
    'Content-Type': 'application/json'
}

  getDetails(): Observable<FinanceIncome[]> {
    return this.http.get<FinanceIncome[]>(`https://jsonplaceholder.typicode.com/photos`)
}
receivetab(message:any){
  this.msg.next(message)
}
}

export interface FinanceIncome {
  albumId?:number
  id?:number
  thumbnailUrl:string
  title:string
  url:string
}
