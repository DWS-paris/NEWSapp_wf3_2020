import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  // Déclaration de variables de type String
  public title: String = "My <i>Newsapp</i>";
  public titleFr: String = "Mon <i>Application de nouvelles</i>";

  // Déclaration d'une variable de type Boolean
  public isFrench: Boolean = true;

  constructor() { }

  // Créer une fonction pour changer les préférence de langue
  public changeLanguagePref = (lang: string) => {
    // Mettre la valeur du localStorage 
    localStorage.setItem('lang-pref', lang);

    // Recharger la page
    location.reload();
  }

  // Créer une fonction pour définir la langue à utiliser
  private checkLanguage = () => {
    let languagePref = localStorage.getItem('lang-pref');

    // Si languagePref est égale à null alors c'est fr
    if( languagePref === null ){
      localStorage.setItem('lang-pref', 'fr');
    }
    else if( languagePref === 'fr' ){
      this.isFrench = true;
    }
    else if( languagePref === 'en' ){
      this.isFrench = false;
    }
  }

  ngOnInit(): void {
    // Vérifier la préférence de langue au chargement du composant
    this.checkLanguage();
  }

}
