import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'carnivores',
    loadChildren: () => import('./carnivores/carnivores.module').then( m => m.CarnivoresPageModule)
  },
  {
    path: 'herbivores',
    loadChildren: () => import('./herbivores/herbivores.module').then( m => m.HerbivoresPageModule)
  },
  {
    path: 'omnivores',
    loadChildren: () => import('./omnivores/omnivores.module').then( m => m.OmnivoresPageModule)
  },
  {
    path: 'voting',
    loadChildren: () => import('./voting/voting.module').then( m => m.VotingPageModule)
  },
  {
    path: 'vote',
    loadChildren: () => import('./vote/vote.module').then( m => m.VotePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
