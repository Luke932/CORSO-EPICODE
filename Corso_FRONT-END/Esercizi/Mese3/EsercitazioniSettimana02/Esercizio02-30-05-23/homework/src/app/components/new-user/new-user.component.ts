import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  nuovoNome: string = "";

  constructor(private userSrv: UsersService) { }

  ngOnInit(): void {
  }

  onNewUser(nuovoNome: string) {
    this.userSrv.createUser(nuovoNome);
  }

}
