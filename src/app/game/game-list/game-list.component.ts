import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


import { Game } from '../shared/game';
import { GAMES } from '../shared/mock-games';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[] = GAMES;
  selectedGame: Game;

  gameYoutubeUrls: any = [];

  video: any = {id: 'wzrnuUOoFNM'};
  baseUrl:string = 'https://www.youtube.com/embed/';
  url: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    // this.url = this.sanitizer.bypassSecurityTrustResourceUrl(""+this.games[1].youtubeEmbed);
    this.onSelect(this.games[0]);

    this.byPassUrl();
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(""+this.selectedGame.youtubeEmbed);
  }

  private byPassUrl() {
    for(let game of this.games) {
      this.gameYoutubeUrls.push(this.sanitizer.bypassSecurityTrustResourceUrl(""+game.youtubeEmbed));
    }
  }



}
