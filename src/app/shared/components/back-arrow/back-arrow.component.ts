import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-back-arrow',
    templateUrl: './back-arrow.component.html',
    styleUrls: ['./back-arrow.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackArrowComponent implements OnInit {

    @Output()
    click: EventEmitter<void> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }


    onClick($event: MouseEvent) {
        $event.preventDefault();
        $event.stopPropagation();
        this.click.emit();
    }
}
