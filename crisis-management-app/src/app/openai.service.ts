import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface OpenAIRequest {
  prompt: string;
}

export interface OpenAIResponse {
  result?: string;
}

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {

  baseUri = environment.openAI.apiUri;

  constructor(private http: HttpClient) {}

  async extractData(request: OpenAIRequest): Promise<OpenAIResponse> {
    const observable = this.http.post<any>(`${this.baseUri}/openai/extractData`, request);
    return observable.toPromise();
  }

  async ask(request: OpenAIRequest): Promise<OpenAIResponse> {
    const observable = this.http.post<any>(`${this.baseUri}/openai/ask`, request);
    return observable.toPromise();
  }
}
