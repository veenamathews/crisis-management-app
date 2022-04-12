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

  getCategoryList(): Promise<any[]> {
    let cList = ([...new Set(INFORMATIONS.filter(x => x.category != undefined || null).map(x => x.category))] as string[]).sort();
    cList.push("Other");

    INFORMATIONS.forEach((element) => {
      if (element.category == null || undefined || '') {
        element.category = "Other";
      }
    });
    let categoryList: any[] = [];
    cList.forEach(value => {
      categoryList?.push({ label: value, checked: false })
    });
    return (categoryList) ? Promise.resolve(categoryList) : Promise.reject(`Item not found any category`);
  }

  getDataById(id: string): Promise<Information> {
    const result = INFORMATIONS.find(item => item.id === id);
    return (result) ? Promise.resolve(result) : Promise.reject(`Item not found: ${id}`);
  }
}
