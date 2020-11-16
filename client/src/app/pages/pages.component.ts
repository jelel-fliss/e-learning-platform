import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  title = 'E-learning platform';
  theme: string;
  


	constructor() {}
	
  
  ngOnInit() {};

  processReq(message: any){
    console.log(message);
    this.theme = message;
  }
}

