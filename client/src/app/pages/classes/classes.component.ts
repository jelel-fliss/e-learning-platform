import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { COURSES } from './course-list';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})

export class ClassesComponent implements OnInit {
  courses = COURSES;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  

}

