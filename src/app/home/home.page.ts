import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  projects = [
    {
      title: 'OMDB Project',
      url: '../omdb',
      subtitle: 'JavaScript',
      img: './assets/omdb.png',
      description: 'The OMDB Movie Search app allows the user to search the OMDB for movie or tv shows, the page then displaying the results. The results are shown in groups of not greater than ten for each page.'
    },
    {
      title: 'TMDB Project',
      url: '../movies',
      subtitle: 'Ionic Angular',
      img: './assets/tmdb.png',
      description: 'Simple app that connects to the The Movie Database API.'
    },
    {
      title: 'TMDB App Project',
      url: '../tmdb-app',
      subtitle: 'React Native, Node',
      img: './assets/tmdbRN.png',
      description: 'Simple app that connects to the The Movie Database API, but with its own backend server, and more functionality.'
    },
    {
      title: 'RestCountries Project',
      url: '../restcountries',
      subtitle: 'JavaScript',
      img: './assets/restcountries.png',
      description: 'Using the same bootstrapped template of the OMDB project, the RestCountries searches country info.'
    },
    {
      title: 'Customer DB Project',
      url: '../customers',
      subtitle: 'Node',
      img: './assets/customer.png',
      description: 'Simple database app that allows the user to add entries to the database.'
    },
    {
      title: 'Userlist Project',
      url: '../userlist',
      subtitle: 'React',
      img: './assets/userlist.png',
      description: 'A collection of user accounts that allow for clicking for more information. Note this is more about the design, a project where I wasn’t yet very clear on routing.'
    },
    {
      title: 'Todo List',
      url: '../todo',
      subtitle: 'JavaScript',
      img: './assets/todo.png',
      description: 'My first Javascript project was a simple to-do list. It should remember tasks between visits, with the ability to edit and undo.'
    },
    {
      title: 'Storefront Project',
      url: '../storefront',
      subtitle: 'HTML5',
      img: './assets/storefront.png',
      description: 'A default template Storefront project, exploring CSS design and animations.'
    }

  ]

  constructor() {}

}
