import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateEditEvaluationComponent } from "./create-edit-evaluation/create-edit-evaluation.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ListEvaluationsComponent } from './list-evaluations/list-evaluations.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap/";
import { EvaluateStudentModalComponent } from './evaluate-student-modal/evaluate-student-modal.component';

const routes: Routes = [
    {path: "new", component: CreateEditEvaluationComponent, },
    {path: "list", component: ListEvaluationsComponent},
    {path: "**", redirectTo: "list"}
];

@NgModule({
    declarations: [CreateEditEvaluationComponent, ListEvaluationsComponent, EvaluateStudentModalComponent],
    imports: [SharedModule, RouterModule.forChild(routes), NgbModule],
})
export class EvaluationModule {}
