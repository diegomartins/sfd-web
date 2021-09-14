import { DancingRole } from "src/app/shared/model/dancing-role.enum";
import { Level } from "src/app/shared/model/level.enum";

export interface EvaluationFilter {
    name: string;
    dancingRole: DancingRole;
    currentLevel: Level;
}
