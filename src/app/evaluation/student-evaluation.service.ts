import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DancingRole } from "../shared/model/dancing-role.enum";
import { Level } from "../shared/model/level.enum";
import { IStudentEvaluation } from "../shared/model/student-evaluation.interface";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class StudentEvaluationService {

    evaluations: IStudentEvaluation[] = [
        {id: 0, name: "Diego Martins", email: "diego@diego.com", currentLevel: Level.INTERMEDIATE_1, dancingRole: DancingRole.LEADER},
        {id: 1, name: "John Doe", email: "john@doe.com", currentLevel: Level.B1, dancingRole: DancingRole.LEADER},
        {id: 2, name: "James Frank", email: "james@frank.com", currentLevel: Level.NEWCOMER, dancingRole: DancingRole.LEADER},
        {id: 3, name: "Mark Park", email: "mark@park.com", currentLevel: Level.B2, dancingRole: DancingRole.LEADER},
        {id: 4, name: "Josh Grant", email: "josh@grant.com", currentLevel: Level.INTERMEDIATE_2, dancingRole: DancingRole.LEADER},
        {id: 5, name: "Jorge Pedrosa", email: "jorge@pedrosa.com", currentLevel: Level.UNKNOWN, dancingRole: DancingRole.LEADER},
        {id: 6, name: "Joana Marques", email: "joana@marques.com", currentLevel: Level.INTERMEDIATE_1, dancingRole: DancingRole.FOLLOWER},
    ];

    constructor() {}

    registerStudentEvaluation(evaluation: IStudentEvaluation) {
        console.log("Registering student evaluation", evaluation);
        this.evaluations.push(evaluation);
    }

    listEvaluations() {
        return this.evaluations.slice();
    }

    fetchEvaluation(id: number): Observable<IStudentEvaluation> {
        const evaluation = this.evaluations.find((e) => e.id === id) as IStudentEvaluation;
        return of(evaluation).pipe(delay(1000));
    }
}
