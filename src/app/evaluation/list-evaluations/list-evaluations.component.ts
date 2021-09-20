import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { DancingRolePipe } from "src/app/shared/dancing-role.pipe";
import { LevelPipe } from "src/app/shared/level.pipe";
import { IStudentEvaluation } from "src/app/shared/model/student-evaluation.interface";
import { ToastService } from "src/app/structure/toast/toast.service";
import { EvaluateStudentModalComponent } from "../evaluate-student-modal/evaluate-student-modal.component";
import { EvaluationListService } from "../evaluation-list.service";
import { StudentEvaluationService } from "../student-evaluation.service";

@Component({
    selector: "app-list-evaluations",
    templateUrl: "./list-evaluations.component.html",
    styleUrls: ["./list-evaluations.component.scss"],
})
export class ListEvaluationsComponent implements OnInit, OnDestroy {

    results: IStudentEvaluation[] = [];
    private modalSubscription: Subscription;

    constructor(private modalService: NgbModal, private toastService: ToastService, private evaluationListService: EvaluationListService, private studentEvaluationService: StudentEvaluationService, private levelPipe: LevelPipe, private dancingRolePipe: DancingRolePipe) {}

    ngOnInit(): void {
        this.evaluationListService.$searchResults.subscribe((results) => this.results = results);
    }

    ngOnDestroy(): void {
        if (this.modalSubscription) {
            this.modalSubscription.unsubscribe();
        }

        this.evaluationListService.$searchResults.unsubscribe();
    }


    openStudentEvaluationEntry(id: number) {
        this.studentEvaluationService.fetchEvaluation(id).subscribe((response) => {
            const modal = this.modalService.open(EvaluateStudentModalComponent);
            modal.componentInstance.evaluation = response;
            this.modalSubscription = modal.closed.subscribe((value) => {
                this.replaceEvaluation(id, value);
            })
        });
    }

    private replaceEvaluation(id: number, evaluation: IStudentEvaluation) {
        const index = this.results.findIndex((e) => e.id === id);
        this.results[index] = evaluation;
        this.toastService.showSuccess(`${evaluation.name.split(" ")[0]} has been moved from ${this.levelPipe.transform(evaluation.currentLevel, true)} into ${this.levelPipe.transform(evaluation.newLevel, true)} as a ${this.dancingRolePipe.transform(evaluation.dancingRole)}`)
    }
}
