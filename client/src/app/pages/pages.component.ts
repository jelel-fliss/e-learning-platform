import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  title = 'E-learning platform';
  
  


	constructor() {}
	
  
  ngOnInit() {};

  processReq(message: any){
  alert(message);
  }
}

