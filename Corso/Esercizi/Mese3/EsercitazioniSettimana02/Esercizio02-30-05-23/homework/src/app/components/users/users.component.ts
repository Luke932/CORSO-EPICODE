import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { LogServiceService } from 'src/app/service/log-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() user: any;
  @Input() id!: number;


  constructor(private userSrv: UsersService, private logSrv: LogServiceService ) { }

  ngOnInit(): void {
  }

cambioStato(newStatus: string) {
  this.userSrv.updateUser(this.id, newStatus);
  this.logSrv.logStatusChange(this.id, newStatus);
}

}
