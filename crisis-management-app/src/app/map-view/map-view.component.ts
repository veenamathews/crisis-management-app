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
  totalDataCount?: number;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.tags = this.dataService.knownTags.map(tag => {
      return {
        ...tag,
        visible: true,
      };
    });

    this.dataService.messages$.subscribe(data => {
      this.totalDataCount = data.length;
      this.dataWithLocation = data
        .filter(item => !!item.coords);

      this.initializeMap();
    });
  }

  toogleLayer(tag: any): void {
    tag.visible = !tag.visible;

    this.map!.setLayoutProperty(
      tag.name,
      'visibility',
      (tag.visible) ? 'visible' : 'none'
    );
  }

  private initializeMap(): void {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      // style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.04, 38.907],
      zoom: 11.15
    });

    this.map.on('load', () => {
      this.setMapData();
    });
  }

  private setMapData(): void {
    // Create a map layer for every tag
    for (const tag of this.tags!) {
      const items = this.dataWithLocation!.filter(item => item.tags?.includes(tag.name));

      const layerId = tag.name;
      const features = items.map(item => ({
        type: 'Feature' as const,
        properties: {
          id: item.id
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [item.coords!.lng, item.coords!.lat]
        }
      }));

      this.map!.addSource(layerId, {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features,
        }
      });

      // Add a layer showing the places.
      this.map!.addLayer({
        id: layerId,
        type: 'circle',
        source: layerId,
        paint: {
          'circle-color': tag.color,
          'circle-radius': 8,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
        }
      });

      this.map!.on('click', layerId, (e) => {
        // const coordinates = e.features[0].geometry.coordinates.slice();
        if (e.features) {
          const id = e.features[0].properties!.id;
          this.selectedLocation = this.dataWithLocation!.find(item => item.id === id);
        }
      });

      // Change the cursor to a pointer when the mouse is over the places layer
      this.map!.on('mouseenter', layerId, () => {
        this.map!.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves
      this.map!.on('mouseleave', layerId, () => {
        this.map!.getCanvas().style.cursor = '';
      });

    }
  }
}
