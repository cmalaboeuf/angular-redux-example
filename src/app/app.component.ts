import { INCREMENT } from './action';
import { IAppState } from './store';
import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select()
  counter: Observable<IAppState>;

  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });

  }
}
