import { Component, OnInit } from '@angular/core';
import { Course } from './Course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  title: String;
  courses: Course[];
  /* courses:Array<{title: String, price: number, description: String, image: String}>; */

  constructor() {

    this.title = "Cursos recomendados";
    this.courses = [
      {
        title: "Curso Python",
        price: 1500,
        description: "Curso para aprender Python asd dasfas fasfas",
        image: {
          path: "assets/img/Python-P.webp",
          alt: "Logo Python"
        },
        clearance: true
      },
      {
        title: "Curso Java",
        price: 1450,
        description: "Curso para aprender Java",
        image: {
          path: "assets/img/java.jpg",
          alt: "Logo Java"
        },
        clearance: false
      },
      {
        title: "Curso PHP",
        price: 1450,
        description: "Curso para aprender PHP",
        image: {
          path: "assets/img/php.jpg",
          alt: "Logo PHP"
        },
        clearance: false
      },
    ]
  }

  ngOnInit(): void {
  }

}
