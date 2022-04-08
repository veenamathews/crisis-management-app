import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  baseUri = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  async ask(request: OpenAIRequest): Promise<OpenAIResponse> {
    console.log('request', request);
    const observable = this.http.post<any>(`${this.baseUri}/openai/ask`, request)
    return observable.toPromise();
  }
}
