import { Component, OnInit } from '@angular/core';
import { ProdecticaService } from '../prodentica.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],
  providers: [ProdecticaService]
})
/** Class representing a Cases component. */
export class CasesComponent implements OnInit {

  //case: number = 1;
  cases: any[] = [];

  constructor(private prodecticaService: ProdecticaService) { }

  ngOnInit() {
    this.cases = this.prodecticaService.cases;
    this.preloadThumbs();
  }

  preloadThumbs() {
    /** Get gallery elements. */
    let darkbox = document.querySelectorAll('.gallery-img');
    let loader = document.getElementById('loader');
    let _imgs = [];
    let remaining = this.cases.length;

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
      _imgs[a].src = './assets/static/cases/thumbs/' + this.cases[a].name + '.jpg';
    }
  }



}
