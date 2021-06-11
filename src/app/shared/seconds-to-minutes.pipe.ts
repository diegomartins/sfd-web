import { Pipe, PipeTransform } from "@angular/core";
import { DancingRole } from "./model/dancing-role.enum";

@Pipe({
    name: "secondsToMinutes",
})
export class SecondsToMinutesPipe implements PipeTransform {
    readonly MAX_SECONDS_SUPPORTED = 99 * 60 + 59;

    transform(value: number): string {

        if (value === undefined || value === null) {
            return "";
        }

        if (value > this.MAX_SECONDS_SUPPORTED) {
            throw new Error(`Value of ${value} exceeds the maximum supported value of ${this.MAX_SECONDS_SUPPORTED}`)
        }

        const minutes = Math.floor(value/60);
        const seconds = value - minutes * 60;

        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    }
}
