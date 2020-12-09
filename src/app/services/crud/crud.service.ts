import { Injectable } from '@angular/core';

// Importer le module HttpClient pour gérer des requêtes HTTP (POST, GET, PUT ou DELETE)
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // Injecter le module HttpClient dans le service
  constructor(
    private HttpClient: HttpClient
  ) { }

  /* 
  Créer une fonction pour les requête HTTP GET
  */
    public getRequest = (url: string) => {
      // Renvoyer une requête HttpClient sous la forme d'une promesse
      return this.HttpClient.get(url).toPromise()
      .then( data => data ) // En cas de succès
      .catch( err => err ) // En cas d'erreur
    }
  //
}
