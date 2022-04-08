import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsViewComponent } from './details-view/details-view.component';

import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { ProcessMessageComponent } from './process-message/process-message.component';

const routes: Routes = [
  { path: 'list', component: ListViewComponent },
  { path: 'map', component: MapViewComponent },
  { path: 'process-message', component: ProcessMessageComponent },
  { path: 'details/:id', component: DetailsViewComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
