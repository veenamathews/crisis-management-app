import { Component, OnInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

import { Coordinates } from '../models';


export interface LocationsMapItem {
  id?: string;
  location: Coordinates;
  title?: string;
  text?: string
}

@Component({
  selector: 'locations-map',
  templateUrl: './locations-map.component.html',
  styleUrls: ['./locations-map.component.scss']
})
export class LocationsMapComponent implements OnInit {

  map?: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 49.285907661951484;
  lng = -123.12694870628977;
  markers?: mapboxgl.Marker[];

  @Input()
    get data(): LocationsMapItem[] | undefined {
      return this._data;
    }
    set data(value: LocationsMapItem[] | undefined) {
      this._data = value;
      this.setMarkers();
    }
  private _data?: LocationsMapItem[];

  ngOnInit() {
    this.initializeMap();
  }

  private setMarkers() {
    if (this.data && this.map) {
      // Remove old markers
      if (this.markers) {
        for (const marker of this.markers) {
          marker.remove(); 
        }
      }

      // Add markers
      this.markers = this.data.map(item => 
        new mapboxgl.Marker()
          .setLngLat([item.location.lng, item.location.lat])
          .setPopup(new mapboxgl.Popup()
            .setHTML('<span style="font-weight: bold">' + item.title + '</span><br/>' + item.text)
          )
          .addTo(this.map!));

      this.map.flyTo({
        center: [this.data[0].location.lng, this.data[0].location.lat]
      })
    }
  }

  private initializeMap() {
    // Get current location
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;
    //     this.map.flyTo({
    //       center: [this.lng, this.lat]
    //     })
    //   });
    // }

    this.buildMap();
    this.setMarkers();
  }

  private buildMap() {
    // Map
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
