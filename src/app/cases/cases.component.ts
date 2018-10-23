import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
/** Class representing a Cases component. */
export class CasesComponent implements OnInit {

  case: number = 1;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Toggle between cases.
   */
  showCase(num) {
    this.case = num;

  }

}
