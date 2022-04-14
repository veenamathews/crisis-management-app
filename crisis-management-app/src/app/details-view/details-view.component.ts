import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Information } from '../models';
import * as moment from 'moment';
@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {

  id?: string;
  data?: Information;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.id = params['id'];

      if (this.id) {
        this.dataService.getDataById(this.id).then(data => {
          this.data = data;
        });
      }
    });
  }

  getDate() {
    return moment(this.data?.date).format('MMMM Do YYYY, h:mm:ss A');
  }
}
