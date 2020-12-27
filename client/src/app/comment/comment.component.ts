import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

test=false;
name = "";
postComment= [];

  constructor() { }

  ngOnInit(): void {
  }
 
   changer(){
    
    this.postComment.push(this.name +" ---------  "+ new Date());
  
    this.name="";
  
    
  }

}
