import { Component, OnInit } from '@angular/core';
import  Swiper  from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
/** Class representing a Home component. */
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    /**
     * Run swiper to slide images.
     */
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }

}
