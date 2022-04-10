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
  showOriginalData = false;
  categoryList: string[] = [];
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.categoryList = ([...new Set(data.filter(x => x.category != undefined || null).map(x => x.category))] as string[]).sort();
      this.categoryList.push("Other");
      this.data.forEach((element) => {
        if (element.category == null || undefined) {
          element.category = "Other";
        }
      });
      console.log(this.data.map(x => x.category))
    })
  }
  
}
