import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateEditEvaluationComponent } from "./create-edit-evaluation/create-edit-evaluation.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
    {path: "new", component: CreateEditEvaluationComponent},
    {path: "**", redirectTo: "new"}
];

@NgModule({
    declarations: [CreateEditEvaluationComponent],
    imports: [SharedModule, RouterModule.forChild(routes)],
})
export class EvaluationModule {}
