import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GpsCoordinatesPipe } from './pipes/gps-coordinates.pipe';
import { LocationsMapComponent } from './locations-map/locations-map.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LocationsMapComponent,
    GpsCoordinatesPipe,
  ],
  exports: [
    LocationsMapComponent,
    GpsCoordinatesPipe,
  ]
})
export class MapsModule {}
