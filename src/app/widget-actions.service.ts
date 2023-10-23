import {inject, Injectable} from '@angular/core';
import {WidgetStateService} from "./widget-state.service";

@Injectable()
export class WidgetActionsService {

  state = inject(WidgetStateService,{self:true});

  reload(){
    this.state.lastUpdateAt = new Date();
    console.log('reloads widget data...');
  }

  copyData() {
    console.log('copy widget to clip board..')
  }


}
