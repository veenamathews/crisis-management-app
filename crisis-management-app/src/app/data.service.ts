import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Information } from './models';

import { INFORMATIONS } from './mock-data/informations';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  knownTags = [
    {
      name: 'food',
      color: '#37b24d'
    },
    {
      name: 'shelter',
      color: '#f08c00'
    },
    {
      name: 'health',
      color: '#d6336c'
    },
    {
      name: 'transport',
      color: '#1c7ed6'
    },
  ];

  getData(): Observable<Information[]> {
    return of(INFORMATIONS);
  }

  getDataById(id: string): Promise<Information> {
    const result = INFORMATIONS.find(item => item.id === id);
    return (result) ? Promise.resolve(result) : Promise.reject(`Item not found: ${id}`);
  }
}
