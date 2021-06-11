import { Pipe, PipeTransform } from "@angular/core";
import { DancingRole } from "./model/dancing-role.enum";

@Pipe({
    name: "dancingRole",
})
export class DancingRolePipe implements PipeTransform {
    transform(value: unknown): unknown {

        if (!value) {
            return;
        }

        switch (value) {
            case DancingRole.LEADER:
                return "Leader";
            case DancingRole.FOLLOWER:
                return "Follower";
            default:
                return "Unknown role";
        }
    }
}
