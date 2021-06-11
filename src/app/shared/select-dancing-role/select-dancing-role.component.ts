import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
    ControlContainer,
    ControlValueAccessor,
    FormControl,
    FormControlDirective,
    FormGroup,
    FormGroupDirective,
    NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { DancingRole } from "../model/dancing-role.enum";

@Component({
    selector: "app-select-dancing-role",
    template: `
        <div
            [formGroup]="parent"
            *ngIf="parent"
            class="btn-group btn-group-toggle"
            role="group"
            data-toggle="buttons">
            <ng-container *ngFor="let role of DANCING_ROLES; index as i">
                <input
                    type="radio"
                    [value]="role"
                    class="btn-check"
                    [formControlName]="controlName"
                    [id]="'ROLE' + i"
                />
                <label class="btn btn-outline-dark" [for]="'ROLE' + i">
                    {{ role | dancingRole }}
                </label>
            </ng-container>
        </div>
    `,
    styles: [``]
})
export class SelectDancingRoleComponent
    implements OnInit
{
    readonly DANCING_ROLES = Object.values(DancingRole);

    public parent: FormGroup;
    @Input() controlName: string;

    constructor(private controlContainer: ControlContainer) {}

    ngOnInit() {
        this.parent = this.controlContainer.control as FormGroup;
    }
}
