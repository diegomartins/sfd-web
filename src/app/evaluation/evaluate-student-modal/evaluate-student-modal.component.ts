import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { IStudentEvaluation } from "src/app/shared/model/student-evaluation.interface";
import { LoadingService } from "src/app/structure/loading/loading.service";
import { ToastService } from "src/app/structure/toast/toast.service";
import { StudentEvaluationService } from "../student-evaluation.service";

@Component({
    selector: "app-evaluate-student-modal",
    templateUrl: "./evaluate-student-modal.component.html",
    styleUrls: ["./evaluate-student-modal.component.scss"],
})
export class EvaluateStudentModalComponent implements OnInit {
    form: FormGroup;
    @Input() evaluation: IStudentEvaluation;

    constructor(
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder,
        private toastService: ToastService,
        private studentEvaluationService: StudentEvaluationService,
        private loadingService: LoadingService
    ) {
        this.form = this.buildForm();
    }

    ngOnInit(): void {}

    save() {

        if (this.form.invalid) {
            this.toastService.showError("Please select the new level.");
            return;
        }

        this.loadingService.show();
        const studentEvaluation: IStudentEvaluation = { ...this.evaluation, newLevel: this.form.value.newLevel };
        this.studentEvaluationService.updateStudentEvaluation(studentEvaluation).subscribe(
            (result) => this.activeModal.close(result),
            (error) => this.toastService.showError("Error while trying to save this evaluation."),
            () => this.loadingService.hide());
    }

    private buildForm() {
        return this.formBuilder.group({
            newLevel: ["", [Validators.required]],
        });
    }
}
