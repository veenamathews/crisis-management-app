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
