import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'BQBXhvuMHkqJL8pnbIHFnPHfchxfr_ngfj_Mft1i8p8D62PuHGkFzgY7eJU0i8DXVLKFBQmyvsqqErppcTFV1uA1z7oMYL0GVzgTKjatigPA1jcn2BOPTY-U5orySR2Y7ATKDig-Hue3srrfQDMj4uInenhS80I'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
