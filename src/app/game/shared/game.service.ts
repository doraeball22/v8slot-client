import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { Game } from './game';

@Injectable()
export class GameService {


private settings: Array<any>;

  constructor(
    private http: HttpClient
  ) { }

//   fetchVideos(query: string) {
//     return this.http
//       .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}`+
//           '&maxResults=50' +
//           '&type=video' +
//           '&key=AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM')
//       .map(response => response.json())
// }



}
