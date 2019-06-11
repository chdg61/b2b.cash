import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MaterialModule } from './modules/material.module';
import { BackArrowComponent } from './components/back-arrow/back-arrow.component';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
    ],
    declarations: [
        BackArrowComponent,
        ProgressBarComponent
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        ProgressBarComponent,
        BackArrowComponent,
    ],
    entryComponents: []
})

export class SharedModule {
}
