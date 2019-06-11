import { Component, Input, OnInit } from '@angular/core';
import { FilmDetail } from '../../models/FilmDetail';

@Component({
    selector: 'app-detail-page',
    templateUrl: './detail-page.component.html',
    styleUrls: ['./detail-page.component.scss'],
})

export class DetailPageComponent implements OnInit {

    @Input()
    film: FilmDetail;

    constructor() {
    }

    ngOnInit(): void {
    }


}
