import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { IStudentEvaluation } from "src/app/shared/model/student-evaluation.interface";
import { EvaluateStudentModalComponent } from "../evaluate-student-modal/evaluate-student-modal.component";
import { StudentEvaluationService } from "../student-evaluation.service";

@Component({
    selector: "app-list-evaluations",
    templateUrl: "./list-evaluations.component.html",
    styleUrls: ["./list-evaluations.component.scss"],
})
export class ListEvaluationsComponent implements OnInit {

    results: IStudentEvaluation[] = [];

    constructor(private modalService: NgbModal, private studentEvaluationService: StudentEvaluationService) {}

    ngOnInit(): void {
        this.results = this.studentEvaluationService.listEvaluations();
    }

    openStudentEvaluationEntry(id: number) {
        this.studentEvaluationService.fetchEvaluation(id).subscribe((response) => {
            const modal = this.modalService.open(EvaluateStudentModalComponent);
            modal.componentInstance.evaluation = response;
        });
    }
}
