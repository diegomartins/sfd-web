import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path: "evaluation", loadChildren: () => import("./evaluation/evaluation.module").then(m => m.EvaluationModule)},
    {path: "**", redirectTo: "evaluation"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
