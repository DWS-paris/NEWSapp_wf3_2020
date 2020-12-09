import { Component, OnInit } from '@angular/core';

// Importer le module pour récupérer la valeur des praramètres de la route
import { ActivatedRoute } from '@angular/router';

// Importer le CrudService
import { CrudService } from "../../services/crud/crud.service";

@Component({
  selector: 'app-newspaper-page',
  templateUrl: './newspaper-page.component.html'
})
export class NewspaperPageComponent implements OnInit {

  // Injecter ActivatedRoute dans le composant
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private CrudService: CrudService
  ) {
    // Capter la valeur du paramètre de la route
    this.ActivatedRoute.params.subscribe( params => {
      // Utiliser la fonction getRequest du CrudService
      this.CrudService.getRequest('https://newsapi.org/v2/everything?sources=' + params.id + '&apiKey=97fccbac2fae46b4a05123f1b5aa016b')
      .then( data => {
        console.log(data);
      })
      .catch( err => {
        console.error(err);
      });
    });
  }

  ngOnInit(): void {
  }

}
