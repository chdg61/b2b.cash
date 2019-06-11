export enum FilmType {
    MOVIE = 'movie',
    SERIES = 'series',
    EPISODE = 'episode',
}

export type ResponseType = 'True' | 'False';

export interface SearchResponseItem {
    Poster: string;
    Title: string;
    Type: FilmType;
    Year: string;
    imdbID: string;
}

export interface SearchResponse {
    Response: ResponseType;
    Search: SearchResponseItem[];
    totalResults: string;
}


export interface FilmDetailResponse {
    Actors: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    DVD: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Production: string;
    Rated: string;
    Ratings: Array<{Source: string, Value: string}>;
    Source: string;
    Value: string;
    Released: string;
    Response: ResponseType;
    Runtime: string;
    Title: string;
    Type: FilmType;
    Website: string;
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
}
