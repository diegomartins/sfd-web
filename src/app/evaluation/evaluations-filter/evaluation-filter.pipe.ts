import { Pipe, PipeTransform } from "@angular/core";
import { DancingRolePipe } from "src/app/shared/dancing-role.pipe";
import { LevelPipe } from "src/app/shared/level.pipe";
import { DancingRole } from "../../shared/model/dancing-role.enum";
import { EvaluationFilter } from "./evaluation-filter.model";

@Pipe({
    name: "evaluationFilter",
})
export class EvaluationFilterPipe implements PipeTransform {

    constructor(private dancingRolePipe: DancingRolePipe, private levelPipe: LevelPipe) {}

    transform(value: EvaluationFilter): string[] {

        if (!value || !Object.values(value).filter(v => !!v).length) {
            return ["None"];
        }

        let filters = [];

        if (value.dancingRole) {
            filters.push(`Role: ${this.dancingRolePipe.transform(value.dancingRole)}`);
        }

        if (value.name) {
            filters.push(`Name: ${value.name}`);
        }

        if (value.currentLevel) {
            filters.push(`Level: ${this.levelPipe.transform(value.currentLevel)}`)
        }


        return filters;
    }
}
