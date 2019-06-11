import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../../models/Film';
import { FilmStorageService } from '../../shared/film-storage.service';
import { FilmsApiService } from '../../shared/films-api.service';

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.scss'],
})

export class ListPageComponent implements OnInit {

    searchFilms: Film[] = [];

    constructor(private roter: Router,
                private filmsApi: FilmsApiService,
                public filmStorage: FilmStorageService,
                ) {
    }

    ngOnInit(): void {
    }

    changeQuery(search: string) {
        this.filmsApi.searchFilms(search)
            .subscribe((result) => {
                this.searchFilms = result;
            });
    }

    selectedFilm(film: Film) {
        this.filmStorage.addFilm(film);
    }

    toDetail(filmId: string) {
        this.roter.navigateByUrl(filmId);
    }

    deleteFilm(filmId: string) {
        this.filmStorage.removeFilmById(filmId);
    }
}
