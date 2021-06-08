import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectLevelComponent } from './select-level/select-level.component';
import { LevelPipe } from './level.pipe';


const declarations = [
    SelectLevelComponent,
    LevelPipe
];

const modulesToExport = [
    CommonModule,
    ReactiveFormsModule
];

@NgModule({
  declarations,
  imports: [
    ...modulesToExport
  ],
  exports: [
    ...declarations,
    ...modulesToExport
  ]
})
export class SharedModule { }
