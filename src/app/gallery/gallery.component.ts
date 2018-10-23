import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
/** Class representing a Gallery component. */
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /** Get gallery elements. */
    let darkbox = document.querySelectorAll('.gallery-img');
    let loader = document.getElementById('loader');
    let _imgs = [];
    let remaining = darkbox.length;

    /** Show preloader icon. */
    loader.style.display = 'block';

    /** Preload thumbnails. */
    for (let a = 1; a < remaining; a++) {
      _imgs[a] = new Image();
      _imgs[a].onload = () => {
             --remaining;
             if (remaining <= 1) {

               /** Hide preloader icon. */
               loader.style.display = 'none';
             }
         };
      _imgs[a].src = './assets/static/images/thumbs/galeria0' + a + '.jpg';
    }
  }

}
