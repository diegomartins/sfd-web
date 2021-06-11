import { Component, Input, ViewChild } from "@angular/core";
import {
    ControlContainer,
    ControlValueAccessor,
    FormControl,
    FormControlDirective,
    NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { Level } from "../model/level.enum";

@Component({
    selector: "app-select-level",
    template: `
        <select [id]="selectId" [formControl]="control" class="form-control">
            <option value="" disabled selected>Select a level</option>
            <option *ngFor="let level of acceptedValues" [value]="level">{{ level | level:shorten }}</option>
        </select>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: SelectLevelComponent,
            multi: true,
        },
    ],
})
export class SelectLevelComponent implements ControlValueAccessor {
    readonly LEVELS = Object.values(Level);

    @ViewChild(FormControlDirective, {static: true}) formControlDirective: FormControlDirective;
    @Input() formControl: FormControl;
    @Input() formControlName: string;
    @Input() selectId: string = "";
    @Input() shorten = false;
    @Input() allowUnknown = true;

    constructor(private controlContainer: ControlContainer) {}

    clearInput() {
        this.control.setValue("");
    }

    registerOnTouched(fn: any): void {
        this.directiveValueAccessor?.registerOnTouched(fn);
    }

    registerOnChange(fn: any): void {
        this.directiveValueAccessor?.registerOnChange(fn);
    }

    writeValue(obj: any): void {
        this.directiveValueAccessor?.writeValue(obj);
    }

    setDisabledState(isDisabled: boolean): void {
        this.directiveValueAccessor?.setDisabledState!(isDisabled);
    }

    get control() {
        return (
            this.formControl ||
            this.controlContainer.control?.get(this.formControlName)
        );
    }

    get directiveValueAccessor() {
        return this.formControlDirective.valueAccessor;
    }

    get acceptedValues() {
        return this.allowUnknown ? this.LEVELS : this.LEVELS.filter(lvl => lvl !== Level.UNKNOWN);
    }
}
