import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Information } from './models';

// import { MESSAGES_DATASET_001 } from './mock-data/messages_dataset_001';
// import { MESSAGES_DATASET_002 } from './mock-data/messages_dataset_002';
import { MESSAGES_DATASET_003 } from './mock-data/messages_dataset_003';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messagesSubject = new BehaviorSubject<Information[]>([]);
  messages$ = this.messagesSubject.asObservable();
  private allMessages: Information[] = [];

  knownTags = [
    {
      name: 'Food',
      color: '#37b24d',
      icon: 'fastfood',
      checked: true
    },
    {
      name: 'Shelter',
      color: '#f08c00',
      icon: 'hotel',
      checked: true
    },
    {
      name: 'Health Services',
      color: '#d6336c',
      icon: 'local_hospital',
      checked: true
    },
    {
      name: 'Transportation',
      color: '#1c7ed6',
      icon: 'directions_bus_filled',
      checked: true
    },
    {
      name: 'Translation',
      color: '#ae3ec9',
      icon: 'interpreter_mode',
      checked: true
    },
    {
      name: 'Legal',
      color: '#22b8cf',
      icon: 'gavel',
      checked: true
    },
    {
      name: 'Volunteering',
      color: '#20c997',
      icon: 'sports_kabaddi',
      checked: true
    },
    {
      name: 'Volunteers Needed',
      color: '#f06595',
      icon: 'group_add',
      checked: true
    },
    {
      name: 'Other',
      color: '#adb5bd',
      icon: 'info',
      checked: true
    },
  ];

  constructor(private http: HttpClient) {
    this.setMessages(MESSAGES_DATASET_003);
  }

  setMessages(messages: Information[]): void {
    this.allMessages = messages;
    this.messagesSubject.next(this.allMessages);
  }

  filter(checkedList: string[]): void {
    let filteredMessages: any = [];
    checkedList.forEach(element => {
      filteredMessages = filteredMessages.concat(this.allMessages.filter(item => item.category === element));
    });
    this.messagesSubject.next(filteredMessages);
  }

  getDataById(id: string): Promise<Information> {
    const result = this.messagesSubject.value.find(item => item.id === id);
    return (result) ? Promise.resolve(result) : Promise.reject(`Item not found: ${id}`);
  }
}
