import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeagoModule } from 'ngx-timeago';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { MapsModule } from './shared/maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { InformationViewComponent } from './information-view/information-view.component';
import { TelegramContentComponent } from './telegram-content/telegram-content.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ProcessMessageComponent } from './process-message/process-message.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchMenuComponent } from './search-menu/search-menu.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    MapViewComponent,
    DetailsViewComponent,
    InformationViewComponent,
    TelegramContentComponent,
    ProcessMessageComponent,
    SearchMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TimeagoModule.forRoot(),

    NzButtonModule,
    NzRadioModule,
    NzTagModule,
    NzCheckboxModule,
    NzListModule,
    NzCardModule,
    NzGridModule,
    NzInputModule,
    NzMessageModule,
    NzIconModule,
    NzDividerModule,
    NzLayoutModule,
    NzModalModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MapsModule,
    AppRoutingModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatTreeModule,
    MatDialogModule,
    MatButtonToggleModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
