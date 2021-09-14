import { resolve } from "@angular/compiler-cli/src/ngtsc/file_system";
import { Injectable } from "@angular/core";
import { BehaviorSubject, ReplaySubject } from "rxjs";
import { IStudentEvaluation } from "../shared/model/student-evaluation.interface";
import { LoadingService } from "../structure/loading/loading.service";
import { EvaluationFilter } from "./evaluations-filter/evaluation-filter.model";
import { StudentEvaluationService } from "./student-evaluation.service";

@Injectable({
    providedIn: "root",
})
export class EvaluationListService {

    private _searchResults = new BehaviorSubject<IStudentEvaluation[]>([]);
    private _appliedFilters = new BehaviorSubject<EvaluationFilter>({} as EvaluationFilter);

    constructor(private studentEvaluationService: StudentEvaluationService, private loadingService: LoadingService) {
    }

    search(filters: EvaluationFilter) {
        this.loadingService.show(); // TODO: Create interceptor
        this.studentEvaluationService.searchEvaluations(filters).subscribe((results: IStudentEvaluation[]) => {
            this._appliedFilters.next(filters);
            this._searchResults.next(results);
        }, (error) => {
            console.error(error);
        }, () => this.loadingService.hide());
    }

    get $searchResults() {
        return this._searchResults;
    }

    get $appliedFilters() {
        return this._appliedFilters;
    }
}
