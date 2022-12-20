import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competance',
  templateUrl: './competance.component.html',
  styleUrls: ['./competance.component.css']
})
export class CompetanceComponent implements OnInit {
  compData=[
    {
      nom:"",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
