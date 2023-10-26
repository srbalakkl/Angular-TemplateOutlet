import {AfterViewInit, Component, inject, Injector, Input, TemplateRef} from '@angular/core';
import {WidgetStateService} from "../widget-state.service";
import {WidgetActionsService} from "../widget-actions.service";

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})

export class WeatherWidgetComponent implements AfterViewInit{
  state = inject(WidgetStateService);
  actions = inject(WidgetActionsService);

  @Input() headerTemplate!:TemplateRef<any>//note:We can't declare the type other than <any> for TemplateRef Variable up to now
  @Input() contentTemplate!: TemplateRef<any>
  @Input() actionTemplate!: TemplateRef<any>

  injector = inject(Injector);//<- to fix the nullInjectorError

  ngAfterViewInit() {
  }
  
}
