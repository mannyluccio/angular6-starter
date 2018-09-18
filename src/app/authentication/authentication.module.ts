import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthenticationRoutingModule} from './authentication-routing.module';
import {AuthenticationLayoutComponent} from './authentication-layout/authentication-layout.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AuthenticationRoutingModule
    ],
    declarations: [
        AuthenticationLayoutComponent,
        LoginComponent
    ]
})
export class AuthenticationModule {
}
