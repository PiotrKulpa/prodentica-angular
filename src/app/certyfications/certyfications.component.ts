import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certyfications',
  templateUrl: './certyfications.component.html',
  styleUrls: ['./certyfications.component.css']
})
export class CertyficationsComponent implements OnInit {

  certs: any[] = [];

  constructor() { }

  ngOnInit() {

    for (var i = 1; i <= 70; i++) {
      this.certs.push(i);
    }

  }

}
