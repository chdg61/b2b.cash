import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Film } from '../../models/Film';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
    selector: 'app-search-film-form',
    templateUrl: './search-film-form.component.html',
    styleUrls: ['./search-film-form.component.scss'],
})

export class SearchFilmFormComponent implements OnInit {


    @Input()
    films: Film[] = [];

    @Output()
    changeQuery: EventEmitter<string> = new EventEmitter();

    @Output()
    selected: EventEmitter<Film> = new EventEmitter();

    searchControl: FormControl = new FormControl('');


    constructor() {
    }

    ngOnInit(): void {
        this.searchControl.valueChanges
            .pipe(
                debounceTime(300),
            )
            .subscribe((query) => {
                this.changeQuery.emit(query);
            });
    }

    optionSelected($event: MatAutocompleteSelectedEvent) {
        this.searchControl.setValue('');
        this.selected.emit($event.option.value);
    }
}
