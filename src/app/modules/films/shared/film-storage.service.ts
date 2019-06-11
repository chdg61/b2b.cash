import { Injectable } from '@angular/core';
import { Film } from '../models/Film';

@Injectable({
    providedIn: 'root',
})
export class FilmStorageService {

    private cache: Map<string, Film> = new Map<string, Film>();

    get count(): number {
        return this.cache.size;
    }

    constructor() {
    }

    addFilm(film: Film): this {
        this.cache.set(film.id, film);
        return this;
    }

    removeFilmById(filmId: string): this {
        this.cache.delete(filmId);
        return this;
    }

    getFilm(filmId: string): Film | null {
        if (this.cache.has(filmId)) {
            return this.cache.get(filmId);
        }
        return null;
    }

    getValues() {
        return Array.from(this.cache.values());
    }
}
