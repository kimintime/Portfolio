import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentPageTitle = 'Home';

  appPages = [
    {
      title: 'Home',
      url: '',
      icon: 'home'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'person-outline'
    },
  ];

  projectPages = [
    {
      title: 'Webstore Project',
      url: '/frontend',
      icon: 'logo-react'
    },
    {
      title: 'OMDB Project',
      url: '/omdb',
      icon: 'logo-javascript'
    },
    {
      title: 'Budget App Project',
      url: '/budget',
      icon: 'logo-react',
    },
    {
      title: 'TMDB App Project',
      url: '/tmdb-app',
      icon: 'logo-react'
    },
    {
      title: 'TMDB Project',
      url: '/movies',
      icon: 'logo-ionic'
    },
    {
      title: 'Memegenerator Project',
      url: '/memegenerator',
      icon: 'logo-react'
    },
    {
      title: 'RestCountries Project',
      url: '/restcountries',
      icon: 'logo-javascript'
    },
    {
      title: 'Todo List Project',
      url: '/todo',
      icon: 'logo-javascript'
    },
    {
      title: 'Storefront Project',
      url: '/storefront',
      icon: 'logo-html5'
    }
  ]

  openGithub(){
    window.open("https://github.com/kimintime")
  }

  openPdf() {
    window.open("/assets/CV.PDF")
  }

  openLinkedIn() {
    window.open("https://www.linkedin.com/in/kimberly-ruohio-1200/")
  }

}
