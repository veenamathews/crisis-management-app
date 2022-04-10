import { Component, Input, OnInit } from '@angular/core';
import { Information } from '../models';
import * as moment from "moment"

@Component({
  selector: 'app-information-view',
  templateUrl: './information-view.component.html',
  styleUrls: ['./information-view.component.scss']
})
export class InformationViewComponent implements OnInit {

  @Input() model?: Information;
  @Input() showOriginalData = false;

  constructor() { }

  ngOnInit(): void {
  }

  getDate() {
    return moment(this.model?.date).format('MMMM Do YYYY, h:mm:ss A');
  }
}
