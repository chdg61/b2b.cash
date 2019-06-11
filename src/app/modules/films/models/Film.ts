import { Expose } from 'class-transformer';
import { FilmType } from '../shared/types';

export class Film {
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
}
