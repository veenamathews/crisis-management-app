import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Information } from './models';

import { INFORMATIONS } from './mock-data/informations';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messagesSubject = new BehaviorSubject<Information[]>(INFORMATIONS);
  messages$ = this.messagesSubject.asObservable();

  knownTags = [
    {
      name: 'Food',
      color: '#37b24d'
    },
    {
      name: 'Shelter',
      color: '#f08c00'
    },
    {
      name: 'Health Services',
      color: '#d6336c'
    },
    {
      name: 'Transportation',
      color: '#1c7ed6'
    },
    {
      name: 'Translation',
      color: '#ae3ec9'
    },
    {
      name: 'Legal',
      color: '#22b8cf'
    },
    {
      name: 'Volunteering',
      color: '#20c997'
    },
    {
      name: 'Volunteers Needed',
      color: '#f06595'
    },
    {
      name: 'Other',
      color: '#adb5bd'
    },
  ];

  constructor(private http: HttpClient) {
    // this.http.get<Information[]>('http://localhost:3000/api/getMessages').subscribe(data => {
    //   this.messagesSubject.next(data);
    // });
  }

  filter(): void {
    const filteredMessages = INFORMATIONS.filter(item => item.tags?.includes('food'));

    // This will emit a new value, so everything that subscribes to messages$ (list, map) will get new a new list of messages
    this.messagesSubject.next(filteredMessages);
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
