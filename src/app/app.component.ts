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
      title: 'OMDB Project',
      url: '/omdb',
      icon: 'logo-javascript'
    },
    {
      title: 'TMDB Project',
      url: '/movies',
      icon: 'logo-ionic'
    },
    {
      title: 'CustomerDB Project',
      url: '/customers',
      icon: 'logo-nodejs',
    },
    {
      title: 'Userlist Project',
      url: '/userlist',
      icon: 'logo-react'
    },
    {
      title: 'Todo List Project',
      url: '/todo',
      icon: 'logo-javascript'
    },
    {
      title: 'OmaRealia Project',
      url: '/omarealia',
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
