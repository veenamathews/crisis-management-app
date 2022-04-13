import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

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

  myControl = new FormControl();
  options: string[] = ['Ukrane', 'Border Services', 'Bus'];

  ngOnInit(): void {
  }
  constructor(
    public dialogRef: MatDialogRef<SearchMenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

