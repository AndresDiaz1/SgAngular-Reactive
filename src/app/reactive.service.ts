import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class ReactiveService {

  private reactiveSubject = new BehaviorSubject<number>(0);
  observable$ = this.reactiveSubject.asObservable();

  constructor() {

   }

   changeNumber(number) {
    this.reactiveSubject.next(number);
  }

}
