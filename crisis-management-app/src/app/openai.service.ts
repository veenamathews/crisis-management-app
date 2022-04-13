import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface OpenAIResponse {
  data?: any;
  log?: { q: string, a: string}[];
}

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {

  baseUri = environment.openAI.apiUri;

  constructor(private http: HttpClient) {}

  async processMessage(message: string): Promise<OpenAIResponse> {
    const observable = this.http.post<any>(`${this.baseUri}/openai/processMessage`, { message });
    return observable.toPromise();
  }
}
