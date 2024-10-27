import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDayOff } from '../model/user-day-off';
import * as jsonData from '../../assets/usersDaysOff.json';


@Injectable({
  providedIn: 'root'
})
export class UserDaysOffServiceService {

  data: Array<UserDayOff> = [];

  // myObs = new Observable<UserDayOff[]>(observer => {
  //   observer.next(jsonData.users);
  //   observer.complete();
  // });

  // ngOnInit() {
  //   this.myObs.subscribe((val) => {
  //     this.data = val;
  //   });
  // }

  // myObservable = new Observable((observer) => {
  //   observer.next(jsonData.users)
  // });

  // getAll(): Array<UserDayOff> { 
  //   this.myObservable.subscribe((val: any) => {
  //     this.data=val;
  //   })
  //   return this.data;
  //   //return this.data;
  //   //return JSON.parse(JSON.stringify(jsonData));
  // }

  getAll(): Array<UserDayOff> {
    return jsonData.users;
  }

}
