import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { ListFilmsContainerComponent } from './components/list-films-container/list-films-container.component';
import { ListFilmsItemComponent } from './components/list-films-item/list-films-item.component';
import { SearchFilmFormComponent } from './components/search-film-form/search-film-form.component';
import { FilmsRoutingModule } from './films-routing.module';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

@NgModule({
    imports: [
        SharedModule,
        FilmsRoutingModule,
    ],
    declarations: [
        ListPageComponent,
        SearchFilmFormComponent,
        ListFilmsContainerComponent,
        ListFilmsItemComponent,
        AddPageComponent,
        DetailPageComponent,
    ],
    entryComponents: [],
})

export class FilmsModule {
}
