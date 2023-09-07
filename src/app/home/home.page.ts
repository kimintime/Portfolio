import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  projects = [
    {
      title: 'Fullstack Library Project',
      url: '../library',
      subtitle: 'React, Redux, Typescript, C#, PostgreSQL',
      img: './assets/librarymain.png',
      description: 'A full-service library website with its own database, user authentication and authorization, with many admin features.'
    },
    {
      title: 'E-commerce Website Project',
      url: '../frontend',
      subtitle: 'React, Redux, Typescript',
      img: './assets/frontend.png',
      description: 'A mockup full ecommerce website, featuring products, categories, a cart, and user login with admin functionality.'
    },
    {
      title: 'Portfolio Project',
      url: '../portfolio',
      subtitle: 'Ionic, Angular, Typescript',
      img: './assets/portfolio.png',
      description: `The website you're looking at right now, built as a responsive mobile app with user-selectable light and dark modes.`
    },
    {
      title: 'OMDB Project',
      url: '../omdb',
      subtitle: 'HTML5, CSS3, Bootstrap, JavaScript',
      img: './assets/omdb.png',
      description: 'The OMDB Movie Search app allows the user to search the OMDB for movie or tv shows, the page displaying the results.'
    },
    {
      title: 'Digital Living Lab Booking Project',
      url: '../bookingapp',
      subtitle: 'Microsoft PowerApps, Sharepoint',
      img: './assets/BookingApp.png',
      description: `App project for Laura's Digital Living Lab, allows users to checkout items from the lab, and for admins to maintain it.`
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
      description: 'Connects to the The Movie Database API, but with its own backend server for user authentication and authorization.'
    },
    {
      title: 'TMDB Project',
      url: '../movies',
      subtitle: 'Ionic Angular',
      img: './assets/tmdb.png',
      description: 'Simple app that connects to the The Movie Database API, using Ionic Angular.'
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
      subtitle: 'HTML5, CSS3, Bootstrap, JavaScript',
      img: './assets/restcountries.png',
      description: 'Using the same template of the OMDB project, RestCountries searches country info and returns the results.'
    },
    {
      title: 'Todo List',
      url: '../todo',
      subtitle: 'HTML5, CSS3, JavaScript',
      img: './assets/todo.png',
      description: 'A simple to-do list. It should remember tasks between visits, with the ability to edit and undo.'
    },
    {
      title: 'Storefront Project',
      url: '../storefront',
      subtitle: 'HTML5, CSS3',
      img: './assets/storefront.png',
      description: 'A default template Storefront project, exploring CSS design and animations.'
    }

  ];
selectedIndex: number;
i: number;

  constructor() {}

}
