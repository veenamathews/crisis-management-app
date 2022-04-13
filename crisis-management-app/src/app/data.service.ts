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

  knownCategory = [
    {
      name: 'Food',
    },
    {
      name: 'Health Services',
    },
    {
      name: 'Legal',
    },
    {
      name: 'Shelter',
    },
    {
      name: 'Translation',
    },
    {
      name: 'Transportation',
    },
    {
      name: 'Volunteer Needed',
    },
    {
      name: 'Other',
    },
  ];

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
    {
      name: 'others',
      color: '#ae3ec9'
    },
  ];

  constructor(private http: HttpClient) { }

  filter(category: string): void {
    const filteredMessages = INFORMATIONS.filter(item => item.category == category);
    this.messagesSubject.next(filteredMessages);
  }

  getDataById(id: string): Promise<Information> {
    const result = INFORMATIONS.find(item => item.id === id);
    return (result) ? Promise.resolve(result) : Promise.reject(`Item not found: ${id}`);
  }
}
