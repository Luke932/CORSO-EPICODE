import { Component } from '@angular/core';
import { Http } from './models/http.interface';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  http: Http[] = [];
  constructor (private httpService: HttpService) {}

  ngOnInit () {
    this.httpService.recupera().subscribe((response) => {
      this.http = response;
      console.log(response);
    }, (error) => {
      console.log(error);
    }
    );
  }

  eliminazione (id: number, index: number) {
    this.httpService.elimina(id).subscribe((response) => {
      console.log(response);
      this.http.splice(index, 1)
  }, error => {
    alert(error);
  });
  }

  favoriti () {
    this.httpService.addFavorite();
  }

}
