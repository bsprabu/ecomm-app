import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecomm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number = 2022;

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}
