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
}
