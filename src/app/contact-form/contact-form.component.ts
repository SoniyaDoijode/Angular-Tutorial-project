import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  contactMethod = [
    {    id: 1, sub: "cindrella"  },
    {    id: 2, sub: "snow white"  }
  ];

  ngOnInit() {
  }

  log(firstName){
    console.log(firstName);
  }

  submit(f){
    console.log("---------------",f.value);
  }
}
