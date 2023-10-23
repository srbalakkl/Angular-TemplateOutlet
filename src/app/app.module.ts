import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WidgetActionsService} from "./widget-actions.service";
import {WidgetStateService} from "./widget-state.service";
import {WeatherWidgetComponent} from "./weather-widget/weather-widget.component";
import {WeatherCustomActionComponent} from "./weather-custom-action/weather-custom-action.component";

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        WeatherCustomActionComponent
    ],
  providers: [WidgetActionsService,WidgetStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
