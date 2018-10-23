import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
/** Class representing a Team component. */
export class TeamComponent implements OnInit {

  showSykut: boolean = false;
  showRadej: boolean = false;

  constructor() { }

  ngOnInit() {
  }



}
