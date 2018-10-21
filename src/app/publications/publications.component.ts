import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  publ: any[] = [];

  constructor() { }

  ngOnInit() {
    for (var i = 1; i <= 2; i++) {
      this.publ.push(i);
    }

  }

}
