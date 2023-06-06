import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-favoriti',
  templateUrl: './favoriti.component.html',
  styleUrls: ['./favoriti.component.scss']
})
export class FavoritiComponent implements OnInit {
total: number = 0;
  constructor(private httpsrv: HttpService) { }

  ngOnInit(): void {
    this.httpsrv.favorites.subscribe((count) => {
      this.total = count;
    })
  }

}
