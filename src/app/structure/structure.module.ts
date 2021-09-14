import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbToastModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastContainerComponent } from "./toast/toast-container/toast-container.component";
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    declarations: [ToastContainerComponent, LoadingComponent],
    imports: [CommonModule, NgbToastModule],
    exports: [ToastContainerComponent, LoadingComponent]
})
export class StructureModule {}
