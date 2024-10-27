import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDayOff } from '../model/user-day-off';
import { UserDaysOffServiceService } from '../service/user-days-off-service.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day-off-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day-off-list.component.html',
  styleUrl: './day-off-list.component.css'
})

export class DayOffListComponent {

  userDaysOffList: Array<UserDayOff> = [];

  constructor( private s: UserDaysOffServiceService ) { }

  myObservable = new Observable((observer) => {
    observer.next(this.s.getAll());
  })

  GetData() {
      this.myObservable.subscribe((val: any) => {
        this.userDaysOffList=val;
      })
  } 


}
