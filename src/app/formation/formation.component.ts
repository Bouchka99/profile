import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formationData=[
    {
      etablissement:"ECOLE NATIONALE DES SCIENCES DE L'INFORMATIQUE",
      specialite:"Génie logiciel (GL)",
      lieu:"MANNOUBA ,TUNISIE",
      duree:"2020-présent",
      image:"ensi.jpg"
    },
    {
      etablissement:"INSTITUT PRÉPARATOIRE AUX ÉTUDES D'INGÉNIEURS",
      specialite:"physique-technologie (PT)",
      lieu:"SFAX,TUNISIE",
      duree:"2018-2020",
      image:"prepa.png"
    },
    {
      etablissement:"LYCÉE MAJIDA BOULILA",
      specialite:"Baccalauréat technique",
      lieu:"SFAX,TUNISIE",
      duree:"2015-2018",
      image:"lycee-majida-boulila.jpg"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
