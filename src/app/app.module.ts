import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path : '',
        redirectTo :'allanimals',
        pathMatch : 'full'
      },
      {
        path : 'allanimals',
        loadChildren : () => import('./animals-module/animals-module.module')
        .then((mod) => mod.AnimalsModuleModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
