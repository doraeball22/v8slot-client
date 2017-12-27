import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import your library
import { OwlModule } from 'ngx-owl-carousel';

// Component
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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



@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    HeaderComponent,
    FooterComponent,
    IntroSectionComponent,
    InstallationComponent,
    HowToRegisterComponent,
    ContactComponent,
    DownloadGamesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    // library
    OwlModule,
    // ng-bootstrap
    NgBootstrap
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
