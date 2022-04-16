import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DataService } from '../data.service';
import { Information } from '../models';
import { OpenAIService } from '../openai.service';

@Component({
  selector: 'app-process-message',
  templateUrl: './process-message.component.html',
  styleUrls: ['./process-message.component.scss']
})
export class ProcessMessageComponent implements OnInit {

  exampleMessage = 'Hello! I live in Leipzig, would like to help refugees from Ukraine. I\'m a nurse with 10 years experience. I\'m available after 4pm on weekdays. My email: alice@example.com';
  model?: string | null;
  responseText?: string | null;
  processing = false;
  originalMessage?: string | null;
  extractedData?: any | null;
  // extractedData?: any | null = {
  //   data: {
  //     address: 'Leipzig, Germany',
  //     coords: {
  //       lat: 51.3408,
  //       lng: 12.3713
  //     },
  //     sentiment: [
  //       {
  //         category: 'Food',
  //         probability: 0.1
  //       },
  //       {
  //         category: 'Shelter',
  //         probability: 0.1
  //       },
  //       {
  //         category: 'Health Services',
  //         probability: 0.8
  //       },
  //       {
  //         category: 'Transportation',
  //         probability: 0.1
  //       },
  //       {
  //         category: 'Translation',
  //         probability: 0.1
  //       },
  //       {
  //         category: 'Legal',
  //         probability: 0.1
  //       },
  //       {
  //         category: 'Volunteering',
  //         probability: 0.1
  //       },
  //       {
  //         category: 'Volunteers Needed',
  //         probability: 0.1
  //       }
  //     ],
  //     category: 'Health Services'
  //   }
  // };

  constructor(private openAIService: OpenAIService, private message: NzMessageService,
              private dataService: DataService, private router: Router) { }

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
    const newMessage: Information = {
      id: (Math.floor(Math.random() * (11000 - 10000) + 10000)).toString(),
      date: Date.now(),
      sourceMessagePlainText: this.model,
      log: this.extractedData.log,
      ...this.extractedData.data,
    };
    this.dataService.addMessage(newMessage);

    this.router.navigate(['/map']);
  }
}
