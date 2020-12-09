import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  // Déclarer une tableau d'objet (collection de données)
  public socialNetworks: Array<any> = [
    {
      icon: '<i class="fab fa-instagram"></i>',
      link: 'https://www.instagram.com/digitalworkshop/'
    },
    {
      icon: '<i class="fab fa-linkedin-in"></i>',
      link: 'https://www.linkedin.com/in/julien-n-21219b28/'
    },
    {
      icon: '<i class="fab fa-twitter"></i>',
      link: 'https://twitter.com/jul_dws'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
