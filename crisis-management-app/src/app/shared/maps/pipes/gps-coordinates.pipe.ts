import { Pipe, PipeTransform } from '@angular/core';

import { Coordinates } from '../models';


@Pipe({ name: 'gpsCoordinates'})
export class GpsCoordinatesPipe implements PipeTransform {

  // Input value: Coordinates or [long, lat] array
  transform(value: Coordinates | mapboxgl.LngLatLike): string {
    if (Array.isArray(value)) {
      const result = `Lat: ${value[1]}, Long: ${value[0]}`;
      return result;
    } else {
      const result = `Lat: ${value.lat}, Long: ${(value as any).lng}`;
      return result;
    }
  }
}
