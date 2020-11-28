import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
     document.body.classList.add('bg4');
     document.body.classList.add('bg3');
     document.body.classList.add('bg5');
     document.body.classList.add('bg4');
     document.body.classList.add('bg7');
     document.body.classList.add('bg6');
     document.body.classList.add('bg9');
  }

}
