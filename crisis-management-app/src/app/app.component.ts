import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SearchMenuComponent } from './search-menu/search-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crisis-management-app';
  display = false;
  activeLinkIndex = -1;
  navLinks: any[];

  constructor(private router: Router, public dialog: MatDialog) {
    this.navLinks = [
      {
          label: 'List',
          link: './list',
          index: 0
      },
      {
          label: 'Map',
          link: './map',
          index: 1
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }


  displaySearchBox(): void {
    const dialogRef = this.dialog.open(SearchMenuComponent, {
      width: '600px',
      height: '500px',
      data: { name: "x", animal: "x" },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
