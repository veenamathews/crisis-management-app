import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Information } from '../models';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  data?: Information[];
  categoryList: any[] = [];
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.messages$.subscribe(data => {
      this.data = data;
    });
    this.dataService.getCategoryList().then(data => {
      this.categoryList = data;
    })
  }
}
