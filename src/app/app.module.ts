import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* 
Gestion des routes
*/
  // Importer le module Angular pour la gestion des routes
  import { RouterModule } from "@angular/router";

  // Importer le modules pour configurer les routes
  import { AppRouterModule } from "./app.router";
//

/* 
Gestion des requêtes HTTP
*/
  // Importer le module Angular pour gérer des requête HTTP
  import { HttpClientModule } from "@angular/common/http";

  // Import des services de l'application
  import { CrudService } from "./services/crud/crud.service";
//

import { AppComponent } from './app.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { NewspaperPageComponent } from './routes/newspaper-page/newspaper-page.component';
import { SinglePageComponent } from './routes/single-page/single-page.component';
import { HeaderComponent } from './statics/header/header.component';
import { FooterComponent } from './statics/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NewspaperPageComponent,
    SinglePageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // Configuration du module du router
    RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } ),
    HttpClientModule
  ],
  // Ajouter les sevices dans le tableau des providers
  providers: [ CrudService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
