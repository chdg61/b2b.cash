import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProgressBarService } from '../../../core/services/progress-bar.service';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent implements OnInit, OnDestroy {

    private subscription: Subscription;

    constructor(public progressBar: ProgressBarService, private changeDetection: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.subscription = this.progressBar
            .changeProgressBar
            .subscribe((result) => {
                this.changeDetection.detectChanges();
            });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
