import { Injectable, Directive, TemplateRef } from '@angular/core';
import { NotifierService, } from 'angular-notifier'
import { NotifierNotificationOptions } from 'angular-notifier/src/models/notifier-notification.model'


@Injectable({
  providedIn: 'root',
})
export class CustomNotifyService {

  private defaultTemplate: TemplateRef<any>
  public id: string

  public setDefaultTemplate(defaultTemplate: TemplateRef<any>) {
    console.log('setDefaulttemplate id', this.id);
    console.log('set template', defaultTemplate);
    
    this.defaultTemplate = defaultTemplate
    window["notifyService"] = this
  }

  public constructor(private notifier: NotifierService) { }

  public notify(notifierNotificationOptions: NotifierNotificationOptions): void {
    console.log('isSameService', window["notifyService"] === this);
    console.log('notify id', this.id);    
    this.notifier.show({ template: this.defaultTemplate, ...notifierNotificationOptions });
  }
}