import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LocationsMapItem } from '../shared/maps';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  mapData?: LocationsMapItem[];

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.mapData = data
        .filter(item => !!item.coords)
        .map(item => {
          return {
            id: item.id,
            location: item.coords!,
            title: item.id,
            text: item.id
          }
        })
    })
  }
}
