import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './modules/films/films.module#FilmsModule'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
        })
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
