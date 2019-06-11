import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type StateProgressBar = 'show' | 'hide';

@Injectable({
    providedIn: 'root',
})
export class ProgressBarService {
    public changeProgressBar: BehaviorSubject<StateProgressBar> = new BehaviorSubject<StateProgressBar>('hide');

    public state: StateProgressBar = 'hide';

    constructor() {
    }

    public show(): void {
        this.state = 'show';
        this.changeProgressBar.next(this.state);
    }

    public hide(): void {
        this.state = 'hide';
        this.changeProgressBar.next(this.state);
    }
}
