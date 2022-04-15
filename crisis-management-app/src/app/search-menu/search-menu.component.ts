import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { Information } from '../models';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent implements OnInit {

  informationData?: Information[];
  myControl = new FormControl();
  options: string[] = ['Ukrane', 'Border Services', 'Bus'];


  constructor(
    public dialogRef: MatDialogRef<SearchMenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.messages$.subscribe(data => {
      this.informationData = data;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  search() {
    let checkedTags: string[] = [];
    this.dataService.knownTags.forEach(x => {
      if (x.checked) {
        checkedTags.push(x.name);
      }
    });

    console.log("Checked Tags", checkedTags);
    this.dataService.filter(checkedTags);
  }

  setValue(i: number, checked: boolean) {
    this.dataService.knownTags[i].checked = !checked;
  }

  selectNone(): void {
    for (const tag of this.dataService.knownTags) {
      tag.checked = false;
    }
  }

  selectAll(): void {
    for (const tag of this.dataService.knownTags) {
      tag.checked = true;
    }
  }
}

