import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  // Déclaration d'une variable de type String
  public title: String = "My <i>Newsapp</i>";

  constructor() { }

  ngOnInit(): void {
  }

}
