import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  constructor() { }
  logStatusChange(id:number,newStatus: string){
    console.log(`Nuovo stato per l\'utente con id ${id}: ${newStatus}`);
  }
}
