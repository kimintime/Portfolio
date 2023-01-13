import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  projects = [
    {
      title: 'E-commerce Website Project',
      url: '../frontend',
      subtitle: 'React, Redux, Typescript',
      img: './assets/frontend.png',
      description: 'A mockup full ecommerce website, featuring products and their categories, a shopping cart, and user login with admin functionality.'
    },
    {
      title: 'OMDB Project',
      url: '../omdb',
      subtitle: 'JavaScript',
      img: './assets/omdb.png',
      description: 'The OMDB Movie Search app allows the user to search the OMDB for movie or tv shows, the page then displaying the results. The results are shown in groups of not greater than ten for each page.'
    },
    {
      title: 'Budget App Project',
      url: '../budget',
      subtitle: 'React, Typescript',
      img: './assets/budget.png',
      description: 'Simple budget app that tracks income and expenses, savings, as well as a savings target.'
    },
    {
      title: 'TMDB App Project',
      url: '../tmdb-app',
      subtitle: 'React Native, Node',
      img: './assets/tmdbRN.png',
      description: 'Similar to project in Ionic Angular, connects to the The Movie Database API, but with its own backend server, and more functionality.'
    },
    {
      title: 'TMDB Project',
      url: '../movies',
      subtitle: 'Ionic Angular',
      img: './assets/tmdb.png',
      description: 'Simple app that connects to the The Movie Database API.'
    },
    {
      title: 'Memegenerator Project',
      url: '../memegenerator',
      subtitle: 'React, Typescript',
      img: './assets/meme.png',
      description: 'Using a memegenerator API, generates memes, using either user text, or the default meme text.'
    },
    {
      title: 'RestCountries Project',
      url: '../restcountries',
      subtitle: 'JavaScript',
      img: './assets/restcountries.png',
      description: 'Using the same bootstrapped template of the OMDB project, RestCountries searches country info and returns the results for each country.'
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
selectedIndex: number;
i: number;

  constructor() {}

}
