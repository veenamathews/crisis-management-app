import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OpenAIService } from '../openai.service';

@Component({
  selector: 'app-process-message',
  templateUrl: './process-message.component.html',
  styleUrls: ['./process-message.component.scss']
})
export class ProcessMessageComponent implements OnInit {

  exampleMessage = 'I live in Berlin Pankow, would like to volunteer for ukrainian crisis. I\'m a nurse with 10 years experience. I\'m available after 4pm on weekdays. My email: nurse@example.com';
  model?: string | null;
  responseText?: string | null;
  processing = false;
  extractedData?: any | null;
  // data?: any | null = { "data": { "address": "Berlin, Germany", "email": "nurse@example.com" }, "log": [ { "q": "Extract home address from this text: ", "a": "Berlin, Germany" }, { "q": "Extract email address from this text: ", "a": "nurse@example.com" }, { "q": "Extract skills from this text: ", "a": "-Live in Berlin \n-Wants to volunteer for Ukrainian crisis \n-10 years of nursing experience \n-Available after 4pm on weekdays" }, { "q": "For each of those categories:\n - food\n - shelter\n - health\n - legal\n - transport \n assign the probability based on this text: ", "a": "food: 0.1\nshelter: 0.2\nhealth: 0.6\nlegal: 0.1\ntransport: 0.0" } ] };
  originalMessage?: string | null;

  constructor(private openAIService: OpenAIService, private message: NzMessageService) {}

  ngOnInit(): void {
  }

  async processMessage(): Promise<void> {
    this.processing = true;
    this.responseText = null;
    this.originalMessage = this.model;

    try {
      const response = await this.openAIService.processMessage(this.model!);

      this.extractedData = response;
    } catch (error: any) {
      const errorMsg = (typeof error === 'object' ? error.message : error);
      this.message.create('error', errorMsg);
    } finally {
      this.processing = false;
    }
  }

  clear(): void {
    this.model = null;
    this.extractedData = null;
    this.responseText = null;
    this.originalMessage = null;
  }

  addToMessages(): void {
    //
  }
}
