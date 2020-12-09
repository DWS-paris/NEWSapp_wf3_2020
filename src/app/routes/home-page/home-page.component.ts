import { Component, OnInit } from '@angular/core';

// Importer le fichier crud.service.ts
import { CrudService } from "../../services/crud/crud.service";

// Importer le module qui permet de naviguer entre les routes
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  // Déclarer une variables pour la liste des sources
  public sourceCollection: Array<any> = null;

  // Injecter le CrudService dans la classe
  constructor(
    private CrudService: CrudService,
    private Router: Router
  ) { }

  // Créer une fonction pour changer de route
  public changeRoute = (id: String) => {
    // Changer la route pour afficher la liste des articles pour l'id spécifié
    this.Router.navigateByUrl('/newspaper/' + id);
  }

  // Créer une fonction pour utiliser le service
  private getSources = () => {
    // Utiliser la fonction getRequest du service
    this.CrudService.getRequest('https://newsapi.org/v2/sources?apiKey=97fccbac2fae46b4a05123f1b5aa016b')
    .then( data => {
      // Intégrer la réponse de l'API dans la variable sourceCollection
      this.sourceCollection = data.sources;
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
