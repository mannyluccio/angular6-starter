import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule, HttpHandler} from '@angular/common/http';
import {ApplicationHttpClient, applicationHttpClientCreator} from './shared/utils/http-client';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        {
            provide: ApplicationHttpClient,
            useFactory: applicationHttpClientCreator,
            deps: [HttpHandler]
        }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
