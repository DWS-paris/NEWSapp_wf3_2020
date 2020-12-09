// Importer le module pour configurer les routes
import { Routes } from "@angular/router";

// Importer tous les composants des routes
import { HomePageComponent } from "./routes/home-page/home-page.component";
import { NewspaperPageComponent } from "./routes/newspaper-page/newspaper-page.component";
import { SinglePageComponent } from "./routes/single-page/single-page.component";

// Créer le module pour les routes et l'exporter
export const AppRouterModule: Routes = [ 
    {
        path: '', //=> URL de la page sans le préfixe '/'
        component: HomePageComponent // => Composant à utiliser dans l'URL
    },
    {
        // Ajouter un parmètre id
        path: 'newspaper/:id',
        component: NewspaperPageComponent
    },
    {
        path: 'single/:id',
        component: SinglePageComponent
    }
];