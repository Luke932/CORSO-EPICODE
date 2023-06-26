import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../models/movies.interface';
import { AuthService, AuthData } from '../auth/auth.service';
import { Favourites } from '../models/favourites.interface';
import { take } from 'rxjs';

export interface TotMovie {
  data: Movies;
  favId?: number; // o undefined
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies!: Movies;
  moviesUrl = "http://localhost:4201";

  constructor(private http: HttpClient, private srvAuth: AuthService) { }

  async getMoviesPop(): Promise<TotMovie[]> {
    const users: AuthData = (await this.srvAuth.users$.pipe(take(1)).toPromise()) as AuthData;
    console.log(users.accessToken);
    const movies = await this.http.get<Movies[]>('http://localhost:4201/movies-popular').toPromise();
    const favorites = await this.http.get<Favourites[]>(`${this.moviesUrl}/favorites?userId=${users.user.id}`).toPromise();
    return movies!.map((m) => ({
      data: m,
      favId: favorites!.find((f) => f.movieId == m.id)?.id,
    }));
  };

  //aggiungi/rimuovi  fav
  async addFav(movieId: number) {
    const users: AuthData = (await this.srvAuth.users$.pipe(take(1)).toPromise()) as AuthData;
    return this.http.post<Favourites>(`${this.moviesUrl}/favorites`, {userId: users.user.id, movieId});
  };

  removeFav(id: number) {
    return this.http.delete(`${this.moviesUrl}/favorites/${id}`);
  };

}
