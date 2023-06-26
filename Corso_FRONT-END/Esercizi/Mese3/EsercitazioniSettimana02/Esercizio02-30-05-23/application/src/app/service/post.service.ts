import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PostService {


  constructor(private http: HttpClient) {}

  fetchData() {
    return this.http.get('../../assets/db.json');
  }




}
