import { Component, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  year = new Date().getFullYear();
  navState: boolean = true;

  toggleNav() {
     this.navState = !this.navState;
  }
}
