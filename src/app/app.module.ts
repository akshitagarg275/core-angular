import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser'
import { AppComponent } from './app.component';
import { card } from './card.component';



@NgModule({
    imports : [BrowserModule],
    declarations : [AppComponent,card],
    bootstrap : [AppComponent]
})
export class AppModule {}
