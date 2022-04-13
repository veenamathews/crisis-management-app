import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Information } from '../models';

@Component({
  selector: 'app-analysis-view',
  templateUrl: './analysis-view.component.html',
  styleUrls: ['./analysis-view.component.scss']
})
export class AnalysisViewComponent implements OnInit {

  messages: Information[] = [];
  currentIdx = -1;
  message?: Information;
  data?: any;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.messages$.subscribe(data => {
      this.messages = data;
      if (this.messages.length > 0) {
        this.currentIdx = 0;
        this.setCurrentMessage();
      }
    });
  }

  prevMessage(): void {
    if (this.currentIdx > 0) {
      this.currentIdx--;
      this.setCurrentMessage();
    }
  }

  nextMessage(): void {
    if (this.currentIdx < this.messages.length) {
      this.currentIdx++;
      this.setCurrentMessage();
    }
  }

  setCurrentMessage(): void {
    this.message = this.messages[this.currentIdx];
    this.data = {
      category: this.message.category,
      cooords: this.message.coords,
      address: this.message.address,
      sentiment: this.message.sentiment,
    };
  }
}
