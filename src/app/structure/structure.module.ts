import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbToastModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastContainerComponent } from "./toast/toast-container/toast-container.component";

@NgModule({
    declarations: [ToastContainerComponent],
    imports: [CommonModule, NgbToastModule],
    exports: [ToastContainerComponent]
})
export class StructureModule {}
