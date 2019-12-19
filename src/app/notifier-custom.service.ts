import { Injectable, Directive, TemplateRef } from '@angular/core';
import { NotifierService, } from 'angular-notifier'
import { NotifierNotificationOptions } from 'angular-notifier/src/models/notifier-notification.model'

let _defaultTemplate: TemplateRef<any>

@Injectable({
  providedIn: 'root',
})
export class CustomNotifyService {
  
  public constructor(private notifier: NotifierService) { }

  public setDefaultTemplate(defaultTemplate: TemplateRef<any>) {
    _defaultTemplate = defaultTemplate
  }

  public notify(notifierNotificationOptions: NotifierNotificationOptions): void {
    this.notifier.show({ template: _defaultTemplate, ...notifierNotificationOptions });
  }
}