import { ScrollDirective } from './../../directives/scroll.directive';
import { ProjectsComponent } from './../../components/projects/projects.component';

import { AboutMeCardComponent } from '../../components/about-me-card/about-me-card.component';
import { LandingComponent } from './landing.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MouseHoverDirective } from 'src/app/directives/mouse-hover.directive';
import { ContactMeComponent } from 'src/app/components/contact-me/contact-me.component';


@NgModule({
  declarations: [LandingComponent, AboutMeCardComponent, ProjectsComponent, ScrollDirective, MouseHoverDirective, ContactMeComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ]

})
export class LandingModule { }
