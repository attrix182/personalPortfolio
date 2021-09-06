import { Globals } from './../../globals';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public aboutMe: boolean = true;
  public contactMe: boolean = false;

  public classAboutMe: string = 'animate__animated animate__backInLeft';
  public classContact: string = 'animate__animated animate__backInLeft';

  public btnMyProjects: string = 'animate__animated animate__backInLeft';

  scrolleo: any = '';


  constructor(public globals: Globals) { }

  ngOnInit() {
   
  }






openMyProjects() {
  this.classAboutMe = 'animate__animated animate__backOutUp '

  setTimeout(() => {
    this.aboutMe = false
    this.contactMe = false
    this.btnMyProjects = 'animate__animated animate__backInUp'

  }, 350);

}


openMyProfile() {
  this.classAboutMe = 'animate__animated animate__backInDown'

  setTimeout(() => {
    this.aboutMe = true
    this.contactMe = false
    this.btnMyProjects = 'animate__animated animate__backInDown'

  }, 250);

}

openContact() {


  this.contactMe = true


}





}
