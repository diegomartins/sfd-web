import { DancingRole } from "./dancing-role.enum";
import { Level } from "./level.enum";

export interface IStudentEvaluation {
    id: number;
    name: string;
    email: string;
    currentLevel: Level;
    dancingRole: DancingRole;
    newLevel?: Level;
}
