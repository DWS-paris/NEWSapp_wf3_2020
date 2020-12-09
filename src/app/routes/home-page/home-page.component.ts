import { Component, OnInit } from '@angular/core';

// importer le fichier crud.service.ts
import { CrudService } from "../../services/crud/crud.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  // Injecter le CrudService dans la classe
  constructor(
    private CrudService: CrudService
  ) { }

  // Créer une fonction pour utiliser le service
  private getSources = () => {
    // Utiliser la fonction getRequest du service
    this.CrudService.getRequest('https://newsapi.org/v2/sources?apiKey=97fccbac2fae46b4a05123f1b5aa016b')
    .then( data => {
      console.log(data)
    })
    .catch( err => {
      console.error(err);
    });
  };

  ngOnInit(): void {
    // Charger le contenu une fois que le composant est chargé
    this.getSources();
  }
}
