import { Component, OnInit , EventEmitter , Input, Output} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() SendRequestToData = new EventEmitter();
  @Output() SendSearchToSearchedComponent = new EventEmitter();
  theme :string;
  value : string;
  constructor() { }

  ngOnInit(): void {
    this.theme = "white-theme";
  }
  sendEvent (){
  if (this.theme == "white-theme") {
    this.theme = "dark-theme";
    this.SendRequestToData.emit(
      this.theme
      );
  } else {
    this.theme = "white-theme";
    this.SendRequestToData.emit(
      this.theme);
     
  }
  }
 onKey(event: any) { //without type info
   this.value = event.target.value
}
}
