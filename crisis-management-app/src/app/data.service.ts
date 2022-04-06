import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Information } from './models';

import { INFORMATIONS } from './mock-data/informations';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData(): Observable<Information[]> {
    return of(INFORMATIONS);
  }

  getDataById(id: string): Promise<Information> {
    const result = INFORMATIONS.find(item => item.id === id);
    return (result) ? Promise.resolve(result) : Promise.reject(`Item not found: ${id}`);
  }
}
