import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public aboutMe: boolean = true;

  public classAboutMe: string = 'animate__animated animate__backInLeft';
  public btnMyProjects: string = 'animate__animated animate__backInLeft';

  constructor() {

  }

  ngOnInit(): void {
  }

  openMyProjects() {
    this.classAboutMe = 'animate__animated animate__backOutUp '

    setTimeout(() => {
      this.aboutMe = false
      this.btnMyProjects = 'animate__animated animate__backInUp'

    }, 600);

  }




}
