import { NgModule } from '@angular/core';
import {
    MatAutocompleteModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatToolbarModule,
} from '@angular/material';

const MODULES = [
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatAutocompleteModule,
    MatProgressBarModule,
]

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule {
}
