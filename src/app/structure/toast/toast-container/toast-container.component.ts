import { Component, TemplateRef } from "@angular/core";
import { ToastService } from "../toast.service";


@Component({
    selector: "app-toast-container",
    templateUrl: "./toast-container.component.html",
    host: { "[class.ngb-toasts]": "true" },
})
export class ToastContainerComponent {
    constructor(public toastService: ToastService) {}

    isTemplate(toast: any) {
        return toast.textOrTpl instanceof TemplateRef;
    }
}
