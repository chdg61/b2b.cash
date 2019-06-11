import { Expose } from 'class-transformer';
import { FilmType } from '../shared/types';
import { Film } from './Film';

export class FilmDetail extends Film {
    @Expose({
        name: 'imdbID',
    })
    id: string;

    @Expose({
        name: 'Title',
    })
    title: string;

    @Expose({
        name: 'Poster',
    })
    cover: string;

    @Expose({
        name: 'Type',
    })
    type: FilmType;

    @Expose({
        name: 'Year',
    })
    year: string;

    @Expose({
        name: 'Actors',
    })
    actors: string;

    @Expose({
        name: 'Awards',
    })
    awards: string;

    @Expose({
        name: 'Country',
    })
    country: string;

    @Expose({
        name: 'Director',
    })
    director: string;

    @Expose({
        name: 'Genre',
    })
    genre: string;

    @Expose({
        name: 'Language',
    })
    language: string;

    @Expose({
        name: 'Runtime',
    })
    runtime: string;

    @Expose({
        name: 'imdbRating',
    })
    rating: string;
}
