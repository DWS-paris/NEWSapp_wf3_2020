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
  public isFrench: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
