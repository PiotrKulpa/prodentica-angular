import { Component, OnInit } from '@angular/core';
import { ProdecticaService } from '../prodentica.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
  providers: [ProdecticaService]
})
/** Class representing a Equipment component. */
export class EquipmentComponent implements OnInit {

  equipment: any[] = [];

  constructor(private prodecticaService: ProdecticaService) { }

  ngOnInit() {
    this.equipment = this.prodecticaService.equipment;
    this.preloadThumbs();
  }

  preloadThumbs() {
    /** Get gallery elements. */
    let darkbox = document.querySelectorAll('.gallery-img');
    let loader = document.getElementById('loader');
    let _imgs = [];
    let remaining = this.equipment.length;

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
      _imgs[a].src = './assets/static/images/thumbs/' + this.equipment[a].name + '.jpg';
    }
  }

}
