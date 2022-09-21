import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  title: String;
  price: number;
  description: String;
  image: String;

  constructor() {

    this.title = "Curso";
    this.price = 1500;
    this.description = "Un curso para aprender";
    this.image = "Inserte imágen";
  }

  ngOnInit(): void {
  }

}
