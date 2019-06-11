import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmDetail } from '../../models/FilmDetail';
import { FilmsApiService } from '../../shared/films-api.service';

@Component({
    selector: 'app-add-page',
    templateUrl: './add-page.component.html',
    styleUrls: ['./add-page.component.scss'],
})

export class AddPageComponent implements OnInit {

    filmId: string;
    film: FilmDetail;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private filmsApi: FilmsApiService) {
        this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.filmsApi.loadFilmById(this.filmId)
            .subscribe((result) => {
                if (result) {
                    this.film = result as FilmDetail;
                }
            });
    }


    toList() {
        this.router.navigateByUrl('/');
    }
}
