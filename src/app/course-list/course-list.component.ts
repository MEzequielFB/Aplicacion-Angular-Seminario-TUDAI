import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  title;

  constructor() {

    this.title = "Título de la lista";
  }

  ngOnInit(): void {
  }

}
