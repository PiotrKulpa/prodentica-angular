import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  case: number = 1;

  constructor() { }

  ngOnInit() {
  }

  showCase(num) {
    this.case = num;

  }

}
