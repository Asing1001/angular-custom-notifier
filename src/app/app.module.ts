import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { DefaultNotifyDirective } from "./defaultNotify.directive";
import { TestComponent } from './test.component';
import { CustomNotifyService } from './notifier-custom.service';
//import { }

/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({})
class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [ CustomNotifyService ]
    }
  }
}

@NgModule({
  imports: [BrowserModule, FormsModule, NotifierModule.withConfig(customNotifierOptions), SharedModule.forRoot()],
  declarations: [AppComponent, DefaultNotifyDirective, TestComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
