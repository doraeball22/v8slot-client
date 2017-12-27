import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { AppComponent } from './app.component';
import { NgBootstrap } from './ng-bootstrap.module';
import { GameListComponent } from './game/game-list/game-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { InstallationComponent } from './installation/installation.component';
import { HowToRegisterComponent } from './how-to-register/how-to-register.component';
import { ContactComponent } from './contact/contact.component';
import { DownloadGamesComponent } from './download-games/download-games.component';
import { HomeComponent } from './home/home.component';
 

 
const routes: Routes = [

  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full' 
  // },

  {
    path: '',
    component: HomeComponent 
  },

  {
    path: 'download',
    component: DownloadGamesComponent
  },

  {
    path: 'installation',
    component: InstallationComponent
  },

  {
    path: 'register',
    component: HowToRegisterComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}