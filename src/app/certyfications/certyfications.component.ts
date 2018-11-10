import { Component, OnInit } from '@angular/core';
import { ProdecticaService } from '../prodentica.service';

@Component({
  selector: 'app-certyfications',
  templateUrl: './certyfications.component.html',
  styleUrls: ['./certyfications.component.css'],
  providers: [ProdecticaService]
})
/** Class representing a Certyfications component. */
export class CertyficationsComponent implements OnInit {

  certs: any[] = [];
  certKopec: any[] = [];
  certRadej: any[] = [];
  case: number = 1;

  constructor(private prodecticaService: ProdecticaService) { }

  ngOnInit() {

    /** Set Dr Kopec thumbnails. */
    this.certKopec = this.prodecticaService.certKopec;

    /** Set Dr Radej thumbnails. */
    this.certRadej = this.prodecticaService.certRadej;

    /** Set number of certification thumbnails. */
    for (var i = 1; i <= 70; i++) {
      this.certs.push(i);
    }
  }

  /**
   * Toggle between cases.
   */
  showCase(num) {
    this.case = num;
  }

}
