import {Component, inject, Injector, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherWidgetComponent} from "../weather-widget/weather-widget.component";

@Component({
  selector: 'app-weather-custom-action',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button type="button" (click)="onclick()">Reload & copy</button>
  `,
  styleUrls: ['./weather-custom-action.component.scss']
})
export class WeatherCustomActionComponent{
  weatherWidget = inject(WeatherWidgetComponent);//<- injecting Weather Widget component
  // to access its properties.

  // alert:We have to explicitly provide which injector is needed to be used as the
  // parent for the component in the embedded view
  // & that can be done by putting injector = inject(Injector); and [ngTemplateOutletInjector]
  // on where the component is used.

  onclick(){
    this.weatherWidget.actions.reload();
    this.weatherWidget.actions.copyData();
  }
}
