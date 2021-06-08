import { Pipe, PipeTransform } from "@angular/core";
import { Level } from "./model/level.enum";

@Pipe({
    name: "level",
})
export class LevelPipe implements PipeTransform {
    transform(value: unknown, shorten?: boolean): unknown {

        if (!value) {
            return;
        }

        switch (value) {
            case Level.NEWCOMER:
                return shorten ? "NC" : "Newcomers";
            case Level.B1:
                return shorten ? "B1" : "Beginners 1";
            case Level.B2:
                return shorten ? "B2" : "Beginners 2";
            case Level.INTERMEDIATE_1:
                return shorten ? "Int 1" : "Intermediate 1";
            case Level.INTERMEDIATE_2:
                return shorten ? "Int 2" : "Intermediate 2";
            default:
                return "Unknown";
        }
    }
}
