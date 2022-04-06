import { Component, Input, OnInit } from '@angular/core';
import { Information } from '../models';

@Component({
  selector: 'app-information-view',
  templateUrl: './information-view.component.html',
  styleUrls: ['./information-view.component.scss']
})
export class InformationViewComponent implements OnInit {

  @Input() model?: Information;

  constructor() { }

  ngOnInit(): void {
  }

}
