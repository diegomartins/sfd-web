import { Component, Input, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: "app-timer-button",
    templateUrl: "./timer-button.component.html",
    styleUrls: ["./timer-button.component.scss"],
})
export class TimerButtonComponent implements OnInit, OnDestroy {
    @Input() seconds = 90;

    running: boolean = false;
    timeLeft: number;
    timer: any;

    constructor() {}

    ngOnInit(): void {
        this.timeLeft = this.seconds;
    }

    ngOnDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    toggle() {
        this.running = !this.running;

        if (this.running) {
            this.startTimer();
        } else {
            this.stopTimer();
        }
    }

    get actionText() {
        return this.running ? "reset" : "start";
    }

    private startTimer() {
        this.timer = setInterval(() => {
            if (this.timeLeft - 1 < 0) {
                this.stopTimer(false);
            } else {
                this.timeLeft = this.timeLeft - 1;
            }
        }, 1000);
    }

    private stopTimer(reset: boolean = true) {
        if (this.timer) {
            clearInterval(this.timer);
        }

        this.timeLeft = reset ? this.seconds : this.timeLeft;
    }
}
