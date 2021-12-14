import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocalitatiComponent } from './localitati/localitati.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RuteAutocarComponent } from './rute-autocar/rute-autocar.component';
import { LocalitateComponent } from './localitate/localitate.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalitatiComponent,
    RuteAutocarComponent,
    LocalitateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'localitati',
        component: LocalitatiComponent,
      },
      {
        path: 'rute',
        component: RuteAutocarComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
