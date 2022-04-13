import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {


  @Input() isVisible: boolean | undefined;
  categoryList?: any[] = [];
  allChecked = false;
  indeterminate = true;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.categoryList = this.dataService.knownCategory;
  }

  showModal(): void {
    this.isVisible = true;

  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    console.log(this.categoryList)

  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.categoryList = this.categoryList?.map(item => ({
        ...item,
        checked: true
      }));
    } else {
      this.categoryList = this.categoryList?.map(item => ({
        ...item,
        checked: false
      }));
    }
  }

  updateSingleChecked(): void {
    if (this.categoryList?.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.categoryList?.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }

}
