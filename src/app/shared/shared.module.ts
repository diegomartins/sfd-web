import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectLevelComponent } from './select-level/select-level.component';
import { LevelPipe } from './level.pipe';
import { DancingRolePipe } from './dancing-role.pipe';
import { SelectDancingRoleComponent } from './select-dancing-role/select-dancing-role.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimerButtonComponent } from './timer-button/timer-button.component';
import { SecondsToMinutesPipe } from './seconds-to-minutes.pipe';


const declarations = [
    DancingRolePipe,
    LevelPipe,
    SecondsToMinutesPipe,
    SelectDancingRoleComponent,
    SelectLevelComponent,
    TimerButtonComponent
];

const modulesToExport = [
    CommonModule,
    ReactiveFormsModule,
    NgbModalModule
];

@NgModule({
  declarations,
  imports: [
    ...modulesToExport,
  ],
  exports: [
    ...declarations,
    ...modulesToExport
  ],
  providers: [
      DancingRolePipe,
      LevelPipe
  ]
})
export class SharedModule { }
