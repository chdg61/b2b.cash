import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';
import { Film } from '../models/Film';
import { FilmDetail } from '../models/FilmDetail';
import { FilmDetailResponse, SearchResponse } from './types';


@Injectable({
    providedIn: 'root',
})
export class FilmsApiService {

    constructor(private api: ApiService) {
    }

    public searchFilms(search: string) {
        return this.api.get<SearchResponse>('', {
            params: {
                s: search,
            },
        }).pipe(
            map((result) => {
                if (result.Response === 'False') {
                    return [];
                }

                return result.Search;
            }),
            map(result => {
                return result.map((item) => plainToClass(Film, item, {
                    excludeExtraneousValues: true,
                    enableImplicitConversion: true,
                }));
            }),
        );
    }

    public loadFilmById(id: string) {
        return this.api.get<FilmDetailResponse>('', {
            params: {
                i: id,
            },
        }).pipe(
            map((result) => {
                if (result.Response === 'False') {
                    return null;
                }

                return result;
            }),
            map(result => {
                if (result) {
                    return plainToClass(FilmDetail, result, {
                        excludeExtraneousValues: true,
                        enableImplicitConversion: true,
                    });
                }

                return result;
            }),
        );
    }
}
