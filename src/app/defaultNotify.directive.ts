import { Directive, TemplateRef } from '@angular/core';
import { CustomNotifyService } from "./notifier-custom.service";

@Directive({
    selector: "ng-template[default-notify]"
})
export class DefaultNotifyDirective {
    constructor(templateRef: TemplateRef<any>, customNotifyService: CustomNotifyService) {
        customNotifyService.setDefaultTemplate(templateRef);
    }
}