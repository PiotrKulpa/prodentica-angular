import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
/** Class representing a Publications component. */
export class PublicationsComponent implements OnInit {

  publ: any[] = [];

  constructor() { }

  ngOnInit() {

    /**
     * Set pdf publications length.
     */
    for (var i = 1; i <= 3; i++) {
      this.publ.push(i);
    }

  }

}
