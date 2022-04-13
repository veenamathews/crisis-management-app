import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Information } from '../models';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { InformationNode } from '../models/Information';
import {FlatTreeControl} from '@angular/cdk/tree';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  private _transformer = (node: InformationNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  
  data?: Information[];
  showOriginalData = false;
  categoryList: any[] = [];
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };
  constructor(public dataService: DataService) { }

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
 


  ngOnInit(): void {
    this.dataService.messages$.subscribe(data => {
      this.data = data;
    });
    this.categoryList = this.dataService.knownCategory;
    console.log(this.categoryList)
  }




}
