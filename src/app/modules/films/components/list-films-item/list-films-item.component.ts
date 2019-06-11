import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../../models/Film';

@Component({
    selector: 'app-list-films-item',
    templateUrl: './list-films-item.component.html',
    styleUrls: ['./list-films-item.component.scss'],
})
export class ListFilmsItemComponent implements OnInit {

    @Input()
    film: Film;

    @Output()
    clickDetail: EventEmitter<string> = new EventEmitter();

    @Output()
    clickDelete: EventEmitter<string> = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    onClick($event: MouseEvent) {
        $event.preventDefault();
        this.clickDetail.emit(this.film.id);
    }

    onDelete($event: MouseEvent) {
        $event.preventDefault();
        this.clickDelete.emit(this.film.id);
    }
}
