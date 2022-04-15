import { Component, Input, OnInit } from '@angular/core';
import { Information } from '../models';
import * as moment from "moment"
import { DataService } from '../data.service';

@Component({
  selector: 'app-information-view',
  templateUrl: './information-view.component.html',
  styleUrls: ['./information-view.component.scss']
})
export class InformationViewComponent implements OnInit {

  @Input() model?: Information;
  @Input() showCategory = false;
  category: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.category = this.dataService.knownTags.find(item => item.name === this.model?.category);
  }

  getDate() {
    return moment(this.model?.date).format('MMMM Do YYYY, h:mm:ss A');
  }
}
