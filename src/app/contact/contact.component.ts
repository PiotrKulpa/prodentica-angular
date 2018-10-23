import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
/** Class representing a Contact component. */
export class ContactComponent implements OnInit {

  /** Set Google Map variables. */
  title: string = 'Prodentica';
  lat: number = 51.2656239;
  lng: number = 22.5195762;
  zoom: number = 14;
  
  constructor() { }

  ngOnInit() {
  }

}
