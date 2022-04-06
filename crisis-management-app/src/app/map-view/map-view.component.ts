import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

import { DataService } from '../data.service';
import { Information } from '../models';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  map?: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  selectedLocation?: Information;
  tags?: any[];
  dataWithLocation?: Information[];

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.tags = this.dataService.knownTags.map(tag => {
      return {
        ...tag,
        visible: true,
      };
    });

    this.dataService.getData().subscribe(data => {
      this.dataWithLocation = data
        .filter(item => !!item.coords);

      this.initializeMap();
    });
  }

  toogleLayer(tag: any): void {
    tag.visible = !tag.visible;
  }

  private initializeMap(): void {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.04, 38.907],
      zoom: 11.15
    });

    this.map.on('load', () => {
      this.setMapData();
    });
  }

  private setMapData(): void {
    console.log('setting data', this.dataWithLocation);
  }
}
