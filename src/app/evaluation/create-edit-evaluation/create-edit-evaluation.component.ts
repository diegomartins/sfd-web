import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastService } from "src/app/structure/toast/toast.service";
import { StudentEvaluationService } from "../student-evaluation.service";

@Component({
    selector: "app-create-edit-evaluation",
    templateUrl: "./create-edit-evaluation.component.html",
    styleUrls: ["./create-edit-evaluation.component.scss"],
})
export class CreateEditEvaluationComponent implements OnInit {
    form: FormGroup;
    allLevels: any[] = ['Unknown', 'Newcomer', 'B1', 'B2', 'Intermediate 1', 'Intermediate 2'];

    constructor(private formBuilder: FormBuilder, private studentEvaluationService: StudentEvaluationService, private toastService: ToastService) {
        this.form = this.buildForm();
    }

    ngOnInit(): void {}

    async save() {
        await this.studentEvaluationService.registerStudentEvaluation(this.form.value);
        this.toastService.showSuccess("Evaluation registered.");
    }

    private buildForm(): FormGroup {
        return this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            currentLevel: ['', [Validators.required]],
            newLevel: ['', []]
        });
    }

}
