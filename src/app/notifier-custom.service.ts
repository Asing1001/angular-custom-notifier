import { Injectable, Directive, TemplateRef } from '@angular/core';
import { NotifierService, } from 'angular-notifier'
import { NotifierNotificationOptions } from 'angular-notifier/src/models/notifier-notification.model'


@Injectable({
  providedIn: 'root',
})
export class CustomNotifyService {

  private defaultTemplate: TemplateRef<any>

  public setDefaultTemplate(defaultTemplate: TemplateRef<any>) {
    console.log('set template', defaultTemplate);
    this.defaultTemplate = defaultTemplate
  }

  public constructor(private notifier: NotifierService) { }

  public notify(notifierNotificationOptions: NotifierNotificationOptions): void {
    this.notifier.show({ template: this.defaultTemplate, ...notifierNotificationOptions });
  }
}