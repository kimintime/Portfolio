import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '/',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'omdb',
    loadChildren: () => import('./omdb/omdb.module').then( m => m.OmdbPageModule)
  },
  {
    path: 'restcountries',
    loadChildren: () => import('./restcountries/restcountries.module').then( m => m.RestcountriesPageModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then( m => m.TodoPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'tmdb-app',
    loadChildren: () => import('./tmdb-app/tmdb-app.module').then( m => m.TmdbAppPageModule)
  },
  {
    path: 'storefront',
    loadChildren: () => import('./storefront/storefront.module').then( m => m.StorefrontPageModule)
  },
  {
    path: 'budget',
    loadChildren: () => import('./budget/budget.module').then( m => m.BudgetPageModule)
  },
  {
    path: 'memegenerator',
    loadChildren: () => import('./memegenerator/memegenerator.module').then( m => m.MemegeneratorPageModule)
  },
  {
    path: 'frontend',
    loadChildren: () => import('./frontend/frontend.module').then( m => m.FrontendPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
