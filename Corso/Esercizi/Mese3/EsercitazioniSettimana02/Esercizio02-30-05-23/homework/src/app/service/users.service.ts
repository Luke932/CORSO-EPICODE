import { Injectable } from '@angular/core';
import { Users } from '../models/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Users[] = [];

  constructor() { }

  createUser(nome: string) {
    this.users.push({nome, stato: 'Occupato'});
    console.log(this.users);
  }

  updateUser(id: number, newStatus: string) {
    this.users[id].stato = newStatus;
  }
}
