import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Information } from './models';

// import { MESSAGES_DATASET_001 } from './mock-data/messages_dataset_001';
import { MESSAGES_DATASET_002 } from './mock-data/messages_dataset_002';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messagesSubject = new BehaviorSubject<Information[]>(MESSAGES_DATASET_002);
  messages$ = this.messagesSubject.asObservable();
  private masterMessage: Information[] = MESSAGES_DATASET_002;

  knownTags = [
    {
      name: 'Food',
      color: '#37b24d',
      icon: 'fastfood',
      checked: false
    },
    {
      name: 'Shelter',
      color: '#f08c00',
      icon: 'hotel',
      checked: false
    },
    {
      name: 'Health Services',
      color: '#d6336c',
      icon: 'local_hospital',
      checked: false
    },
    {
      name: 'Transportation',
      color: '#1c7ed6',
      icon: 'directions_bus_filled',
      checked: false
    },
    {
      name: 'Translation',
      color: '#ae3ec9',
      icon: 'interpreter_mode',
      checked: false
    },
    {
      name: 'Legal',
      color: '#22b8cf',
      icon: 'gavel',
      checked: false
    },
    {
      name: 'Volunteering',
      color: '#20c997',
      icon: 'sports_kabaddi',
      checked: false
    },
    {
      name: 'Volunteers Needed',
      color: '#f06595',
      icon: 'group_add',
      checked: false
    },
    {
      name: 'Other',
      color: '#adb5bd',
      icon: 'info',
      checked: false
    },
  ];

  constructor(private http: HttpClient) { }

  filter(checkedList: string[]): void {
    const filteredMessages = this.messagesSubject.value.filter(item => item.category === "Food");

    checkedList.forEach(element => {
      this.messagesSubject.value.filter(item => item.category === element);
    });

    const filteredMessages1 = this.messagesSubject;
    this.messagesSubject.next(filteredMessages1.value);
  }

  getDataById(id: string): Promise<Information> {
    const result = this.messagesSubject.value.find(item => item.id === id);
    return (result) ? Promise.resolve(result) : Promise.reject(`Item not found: ${id}`);
  }
}
