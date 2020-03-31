import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "list of courses is of length required in alphabets of english language, Spanish language, French, Italy, Japanese, Turkish";
  courses;
  titleField: '';
  images: string[];
  isActive: boolean;

    constructor(private course: CourseService) {
    this.courses = this.course.getCourses();
    this.images = this.course.getImages();
    }

  ngOnInit() {
    this.isActive = false;
  }


  clickedBtn(){
    console.log("___-_____")
  }

  para = "me@tcs.com"
  textClick(){
    console.log("----",this.para);
  }

 

}
