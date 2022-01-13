import { Profile } from '../../class/profile';
import { GithubService } from '../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-card',
  templateUrl: './about-me-card.component.html',
  styleUrls: ['./about-me-card.component.scss'],
})
export class AboutMeCardComponent implements OnInit {
  public profile: any;
  public linkedinURL: string;
  public linkCV: string;

  constructor(private perfGitHub: GithubService) {
    this.linkCV ='https://drive.google.com/file/d/1eLt-cvRD_par698JdlCLSoKjOOKR4Azx/view?usp=sharing';
    this.profile = '';
    this.linkedinURL ='https://www.linkedin.com/in/luciano-sinisterra-4a413913b/';
  }

  ngOnInit(): void {
    this.myProfileGitHub();
  }

  public myProfileGitHub() {
    this.perfGitHub.getProfileGitHub().subscribe((data) => {
      this.profile = data;
    });
  }
}
