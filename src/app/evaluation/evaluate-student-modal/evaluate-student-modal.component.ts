import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { IStudentEvaluation } from "src/app/shared/model/student-evaluation.interface";

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
        private formBuilder: FormBuilder
    ) {
        this.form = this.buildForm();
    }

    ngOnInit(): void {}

    save() {
        console.log("SAVING " + this.form.value.newLevel);
    }

    private buildForm() {
        return this.formBuilder.group({
            newLevel: ["", [Validators.required]],
        });
    }
}
