import { Injectable } from "@angular/core";
import { Http } from "../models/http.interface";
import { catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Subject, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  favorites = new Subject<number>();
  count = 0;

  constructor(private http: HttpClient) {}

  recupera() {
    return this.http
      .get<Http[]>("https://jsonplaceholder.typicode.com/photos")
      .pipe(catchError(err => {
        return throwError(this.getErrorMessage(err.status));
      }));
  }

  elimina(id: number) {
    return this.http
      .delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .pipe(
        catchError((err) => {
          return throwError(this.getErrorMessage(err.status));
        })
      );
  }

  addFavorite() {
    this.count++;
    this.favorites.next(this.count);
  }

  private getErrorMessage(status: number) {
    let notf = "";
    switch (status) {
      case 404:
        notf = "La página no existe";
        break;
      default:
        notf = "Ocurrió un error";
        break;
    }
    return notf;
  }
}
