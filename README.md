# NewsApp

Création d'une application Angular utilisant Newsapp.org pour WebForce3 Sud 2020

# Etapes de réalisation

## Création des composants

Créer les 3 composants pour les routes :

- Home page (la liste des journaux)
- Newspaper page (la liste des articles d'un journal)
- Single page (le contenu d'un article)

Commandes `g` = generate, `c` = component : 

```bash
ng g c routes/homePage -is
ng g c routes/newspaperPage -is
ng g c routes/singlePage -is
```

Créer des composants enfants 
- Header pour le titre et la navigation
- Footer pour la signature de l'application

```bash
ng g c statics/header -is
ng g c statics/footer -is
```

## Configuration du système de routing

Le routing permet de définir les URLs de l'application et les composants à utiliser. Il faut dans un premier temps créer un fichier `app.router.ts` dans le dossier `app` puis ouvrir ce fichier afin d'y coller le code suivant : 

```js
// Importer le module pour configurer les routes
import { Routes } from "@angular/router";

// Créer le module pour les routes et l'exporter
export const AppRouterModule: Routes = [ 
];
```

Importer dans le fichier `app.router.ts` tous les composants des routes : 

```js
import { HomePageComponent } from "./routes/home-page/home-page.component";
import { NewspaperPageComponent } from "./routes/newspaper-page/newspaper-page.component";
import { SinglePageComponent } from "./routes/single-page/single-page.component";
```

Pour configurer une route il faut ajouter un objet dans la const `AppRouterModule` de la façon suivante : 

```js
{
    path: '', //=> URL de la page sans le préfixe '/'
    component: HomePageComponent // => Composant à utiliser dans l'URL
}
```

Le fichier `app.router.ts` contient le code suivant :

```js
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
        path: 'newspaper',
        component: NewspaperPageComponent
    },
    {
        path: 'single',
        component: SinglePageComponent
    }
];
```

Une fois le fichier `app.router.ts` correctement configuré, il faut l'intégrer dans l'application en le chargeant dans le fichier `app.module.ts`. Le fichier `app.module.ts` est celui qui permet de rendre disponible des modules ou des composant d'ans l'application Angular. Ouvrir le fichier fichier `app.module.ts` pour y ajouter le code suivant au début du fichier (avant `@NgModule()`) : 

```js
/* 
Gestion des routes
*/
  // Importer le module Angular pour la gestion des routes
  import { RouterModule } from "@angular/router";

  // Importer le modules pour configurer les routes
  import { AppRouterModule } from "./app.router";
//
```

Pour finaliser la configuration des routes, il faut ajouter dans le tableau `imports` le code suivant : 

```js
imports: [
    ...
    // Configuration du module du router
    RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } )
    ...
]
```

Il est possible à présent de définir l'endroit où doivent s'afficher les composants des différentes URLS, en règle générale c'est au niveau du composant principal de l'application (app.component). Il faut donc ouvrir le fichier `app.component.html`, supprimer le code présent sur le fichier et ajouter le code suivant : 

```html
<main>
    <!-- Ajouter la directive (balise HTML spécifique) pour afficher les composants des routes -->
    <router-outlet></router-outlet>
</main>
```

Nous allons profiter du fait d'être dans le fichier `app.component.html` pour y importer les composant `statics` du header et du footer, le fichier `app.component.html` contient au final le code suivant : 

```html
<!-- Importer le header -->
<app-header></app-header>

<main>
  <!-- Ajouter la directive (balise HTML spécifique) pour afficher les composants des routes -->
  <router-outlet></router-outlet>
</main>

<!-- Importer le footer -->
<app-footer></app-footer>
```

A présent pour pouvoir tester les routes nous allons mettre en place la navigation de l'application, pour cela nous allons ajouter dans le fichier `header.component.html` des liens de la manière suivantes :

```html
<!-- Utiliser la directive (attribut spécifique) "routerLink" pour changer de route -->
<a [routerLink]="'/'">Accueil</a>
```

Il est possible à présent de tester tous le routing en compilant l'application pour l'afficher dans le navigateur avec la commande suivante :

```bash
ng serve
```

> L'application est visible à l'adresse `http://localhost:4200`

## Manipulation des concepts de base en Angular

Le principe d'Angular et de joindre une vue HTML à un contrôleur Javascript, le but est de pouvoir définir des variables dans le contrôleur qu'il est possible d'utiliser ensuite dans le vue. Nous allons ajouter un titre à notre application, pour cela nous devons créer une variable dans le fichier `header.component.ts` (le contrôleur) de la façon suivante : 

```ts
// Déclaration d'une variable de type String
public title: String = "My Newsapp";
```

Il est possible d'afficher le valeur de la variable `title` dans le fichier `header.component.html` de plusieurs manières différentes : 

```html
<!-- Afficher le contenu d'une variable {{VAR}} -->
<h1>{{title}}</h1>

<!-- Afficher le contenu d'une variable [innerHTML]="VAR" (pour afficher le contenu en HTML) -->
<h1 [innerHTML]="title"></h1>

<!-- Afficher le contenu d'une variable [textContent]="VAR" -->
<h1 [textContent]="title"></h1>
```

Un autre grand principe d'Angular est de pouvoir réaliser des boucle directement dans la vue HTML, pour cela il faut créer un tableau dans le contrôleur que nous utiliserons ensuite dans la vue pour réaliser la boucle. Nous allons prendre en exemple le `footer` dans laquel nous allons ajouter des liens vers les réseaux sociaux. Nous allons donc ouvrir le fichier `footer.component.ts` pour y ajouter le tableau suivant : 

```ts
// Déclarer une tableau d'objet (collection de données)
public socialNetworks: Array<any> = [
    {
        icon: '<i class="fab fa-instagram"></i>',
        link: '#'
    },
    {
        icon: '<i class="fab fa-linkedin-in"></i>',
        link: '#'
    },
    {
        icon: '<i class="fab fa-twitter"></i>',
        link: '#'
    }
]
```

Une fois le tableau créé, il est possible de réaliser directement sur la vue HTML une boucle en utilisant la directive `*ngFor` de la manière suivante : 

```html
<ul>
    <!-- utilisation de la directive *ngFor pour réaliser une boucle dnas le vue -->
    <li *ngFor="let item of socialNetworks">
        <!-- Afficher une balise a avec le bon contenu et le bon lien -->
        <a [href]="item.link" target="_blank" [innerHTML]="item.icon"></a>
    </li>
</ul>
```

> Il faut au préalable importer FontAwesome dans le fichier `index.html`