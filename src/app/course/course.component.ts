import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  title;
  description;
  image;

  constructor() {

    this.title = "Curso";
    this.description = "Un curso para aprender";
    this.image = "Inserte imágen";
  }

  ngOnInit(): void {
  }

}
