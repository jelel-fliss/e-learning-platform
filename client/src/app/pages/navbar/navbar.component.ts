import { Component, OnInit , EventEmitter , Input, Output} from '@angular/core';
import { SamplePageThreeComponent } from '../sample-page-three/sample-page-three.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() SendRequestToData = new EventEmitter();
  theme :string;
  constructor() { }

  ngOnInit(): void {
    this.theme = "dark-theme";
  }
  sendEvent (){
  if (this.theme == "dark-theme") {
    this.theme = "white-theme";
    this.SendRequestToData.emit(
      this.theme
      );
  } else {
    this.theme = "dark-theme";
    this.SendRequestToData.emit(
      this.theme
      );
  }
  }

}