import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { EvaluationListService } from "../evaluation-list.service";
import { EvaluationFilter } from "./evaluation-filter.model";

@Component({
    selector: "app-evaluations-filter",
    templateUrl: "./evaluations-filter.component.html",
    styleUrls: ["./evaluations-filter.component.scss"],
})
export class EvaluationsFilterComponent implements OnInit, OnDestroy {

    private appliedFiltersSub: Subscription;
    private filters: EvaluationFilter;

    form: FormGroup;
    collapsed: boolean;

    constructor(formBuilder: FormBuilder, private evaluationListService: EvaluationListService) {
        this.form = formBuilder.group({
            name: new FormControl(),
            currentLevel: new FormControl(),
            dancingRole: new FormControl(),
        });
    }

    ngOnInit(): void {
        this.appliedFiltersSub = this.evaluationListService.$appliedFilters.subscribe((filters) => {
            this.filters = filters;
            this.collapsed = true;
        });

        this.evaluationListService.search({} as EvaluationFilter);
    }

    ngOnDestroy(): void {
        this.appliedFiltersSub.unsubscribe();
    }

    submit(): void {
        this.evaluationListService.search(this.form.value);
    }

    cleanFilters() {
        this.form.reset();
        this.evaluationListService.search({} as EvaluationFilter);
    }
}
