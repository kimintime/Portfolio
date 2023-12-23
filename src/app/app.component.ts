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
      url: '/home',
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
      title: 'Library Project',
      url: '/library',
      icon: 'logo-react'
    },
    {
      title: 'Harmonious HR Project',
      url: '/harmonious',
      icon: 'logo-python'
    },
    {
      title: 'Webstore Project',
      url: '/frontend',
      icon: 'logo-react'
    },
    {
      title: 'Portfolio Project',
      url: '/portfolio',
      icon: 'logo-ionic'
    },
    {
      title: 'OMDB Project',
      url: '/omdb',
      icon: 'logo-javascript'
    },
    {
      title: 'Booking App Project',
      url: '/bookingapp',
      icon: 'logo-microsoft'
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
  ];

  openGithub() {
    window.open('https://github.com/kimintime');
  }

  openPdf() {
    window.open('/assets/CV.PDF');
  }

  openIntegrify() {
    window.open('/assets/Kimberly_Ruohio.pdf');
  }

  openHackathon() {
    window.open('/assets/Kimberly4.pdf');
  }

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/kimberly-ruohio-1200/');
  }

}
