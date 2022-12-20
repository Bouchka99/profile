import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.css']
})
export class CentreComponent implements OnInit {
  centreData=[
    {
      nom:"Sport",
      contenu:"FootBall, HandBall",
      image:"football.jpg"
    },
    {
      nom:"Musique",
      contenu:"chanter, jouer du tambour et violon",
      image:"mahdi11.jpg"
    },
    {
      nom:"Camping",
      contenu:"découvrir et vivre des aventures",
      image:"camping.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
