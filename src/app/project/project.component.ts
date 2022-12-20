import { Component, OnInit } from '@angular/core';
import { projectData } from './pro-data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  projectData=projectData;

  constructor() { }

  ngOnInit(): void {
  }

}
