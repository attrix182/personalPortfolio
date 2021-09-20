import { Profile } from '../../class/profile';
import { GithubService } from '../../services/github.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-about-me-card',
  templateUrl: './about-me-card.component.html',
  styleUrls: ['./about-me-card.component.scss']
})
export class AboutMeCardComponent implements OnInit {

  
  public profile:any;
  public linkedinURL:string
  public linkCV:string = 'https://drive.google.com/file/d/1GO4cBvlyghIyTNts3-UVQC_c-DuEzoEO/view?usp=sharing'

  constructor(private perfGitHub: GithubService) {

    this.profile = ''
    this.linkedinURL = "https://www.linkedin.com/in/luciano-sinisterra-4a413913b/"
   }

  ngOnInit(): void {
    this.myProfileGitHub();
  }

  public myProfileGitHub(){
    this.perfGitHub.getProfileGitHub().subscribe((data)=>{
      this.profile=data;

    });
  }

}
