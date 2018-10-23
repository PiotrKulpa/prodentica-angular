import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certyfications',
  templateUrl: './certyfications.component.html',
  styleUrls: ['./certyfications.component.css']
})
/** Class representing a Certyfications component. */
export class CertyficationsComponent implements OnInit {

  certs: any[] = [];

  constructor() { }

  ngOnInit() {

    /** Set number of certification thumbnails. */
    for (var i = 1; i <= 70; i++) {
      this.certs.push(i);
    }

  }

}
