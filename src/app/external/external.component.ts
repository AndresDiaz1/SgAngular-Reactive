import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ReactiveService }   from '../reactive.service';


@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.scss']
})
export class ExternalComponent implements OnInit {

  item: number = 0;
  subscription:Subscription;

  constructor(private reactiveService:ReactiveService) { }

  ngOnInit() {
    this.subscription = this.reactiveService.observable$
      .subscribe(item => this.item = item);
  }

  updateNumber(){
    this.reactiveService.changeNumber(Math.random());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
