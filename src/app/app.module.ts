import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CentreComponent } from './centre/centre.component';
import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatGridListModule} from '@angular/material/grid-list';
import { CompetanceComponent } from './competance/competance.component';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    ProjectComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    CentreComponent,
    FormationComponent,
    ExperienceComponent,
    CompetanceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MDBBootstrapModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
