import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllanimalsComponent } from './allanimals/allanimals.component';
import { FiveanimalsComponent } from './fiveanimals/fiveanimals.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllanimalsComponent,
    FiveanimalsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        component : AllanimalsComponent
      },
      {
        path : 'fiveanimals',
        component : FiveanimalsComponent
      }
    ])
  ]
})
export class AnimalsModuleModule { }
