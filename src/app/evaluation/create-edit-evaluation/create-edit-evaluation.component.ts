import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastService } from "src/app/structure/toast/toast.service";
import { StudentEvaluationService } from "../student-evaluation.service";

@Component({
    selector: "app-create-edit-evaluation",
    templateUrl: "./create-edit-evaluation.component.html",
    styleUrls: ["./create-edit-evaluation.component.scss"],
})
export class CreateEditEvaluationComponent implements OnInit {
    multiMode = false;
    form: FormGroup;

    constructor(private formBuilder: FormBuilder, private studentEvaluationService: StudentEvaluationService, private toastService: ToastService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.form = this.buildForm();
        this.multiMode = !!this.activatedRoute.snapshot.queryParams.multi && this.activatedRoute.snapshot.queryParams.multi === "true";
    }

    ngOnInit(): void {}

    async save() {

        if (this.form.invalid) {
            this.toastService.showError("Data is invalid or incomplete.");
            return;
        }

        this.studentEvaluationService.registerStudentEvaluation(this.form.value).subscribe(() => {
            this.toastService.showSuccess(`${this.form.value.name} registed for evaluation.`);

            if (this.multiMode) {
                this.form.reset();
            } else {
                this.router.navigate(["/list"]);
            }
        }, (err) => {
            this.toastService.showError(err.error?.message || "Error registering for evaluation.");
            console.error(err);
        });
    }

    private buildForm(): FormGroup {
        return this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            dancingRole: ['', [Validators.required]],
            currentLevel: ['', [Validators.required]],
            newLevel: ['', []]
        });
    }

}
