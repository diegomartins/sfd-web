import { Level } from "./level.enum";

export interface IStudentEvaluation {
    name: string;
    email: string;
    currentLevel: Level;
    newLevel?: Level;
}
