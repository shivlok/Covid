import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import 'hammerjs';

import { CoronaService } from './services/corona.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DistrictComponent } from './district/district.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistrictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule

  ],
  entryComponents:[
   DistrictComponent
  ],
  providers: [
    CoronaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
