import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  show: boolean =  false;
  constructor() { }

  ngOnInit() {
  }

  showService(event) {
    event.stopPropagation();
    if(event.target.parentNode.nodeName === 'DIV') {
      event.target.parentNode.lastElementChild.classList.toggle('slide-bottom');
    } else if (event.target.parentNode.nodeName === 'H2') {
      event.target.parentNode.parentNode.lastElementChild.classList.toggle('slide-bottom');
    }

  }

}
