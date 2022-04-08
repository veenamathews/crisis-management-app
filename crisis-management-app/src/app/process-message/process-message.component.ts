import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OpenAIService } from '../openai.service';

@Component({
  selector: 'app-process-message',
  templateUrl: './process-message.component.html',
  styleUrls: ['./process-message.component.scss']
})
export class ProcessMessageComponent implements OnInit {

  model?: string | null = `Extract city from this text:

Live in Berlin, would like to volunteer for ukrainian crisis. I'm a nurse with 10 years experience. I'm available after 4pm on weekdays. My email: nurse@example.com
`;
  responseText?: string | null;
  processing = false;

  constructor(private openAIService: OpenAIService, private message: NzMessageService) { }

  ngOnInit(): void {
  }

  async processMessage() {
    this.processing = true;
    this.responseText = null;

    try {
      const response = await this.openAIService.ask({
        prompt: this.model!,
      });
  
      this.responseText = response.result; 
    } catch (error: any) {
      const errorMsg = (typeof error === 'object' ? error.message : error)
      this.message.create('error', errorMsg);
    } finally {
      this.processing = false;
    }    
  }

  clear() {
    this.model = null;
    this.responseText = null;
  }
}
