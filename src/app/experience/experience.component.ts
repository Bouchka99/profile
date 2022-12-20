import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  expData=[
    {
      organisme:"Stagiaire chez ZetaBox",
      description:"Développer une application web/mobile de coordination entre les unités sanitaires pour faciliter l'interaction, la communication et les procédures  d'achat et de vente entre eux. -concevoir l'application grâce au CMS Strapi et utiliser Node Js pour la partie back-end. -utiliser Flutter pour la partie front-end et inclure GetX pour avoir une meilleure performence de la gestion de l'état.",
      periode:"juillet - Août 2022",
      image:"mahdi12.jpg"
    },
    {
      organisme:"Stagiaire chez ZetaBox",
      description:"Participer au développement d'une application de gestion de ressources et bénéfices. -concevoir l'application grâce au CMS Strapi. -développer certaine CRUD et utiliser le Cron. -apprendre flutter basé sur le langage de programmation Dart pour développer les intrefaces graphiques.",
      periode:"juin 2021",
      image:"mahdi13.jpg",
    },
    {
      organisme:"Saisonnier chez Carrefour Market",
      description:"Essayer plusieurs postes et apprécier le travail en équipe.",
      periode:"2016-2018",
      image:"exp.jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
