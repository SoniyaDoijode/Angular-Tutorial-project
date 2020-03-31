import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(){
    return ['apple','banana','orange'];
  }

  getImages(){
    return ["/assets/capt1.jpg","/assets/capt2.jpg","/assets/capt3.jpg"];
  }
}
