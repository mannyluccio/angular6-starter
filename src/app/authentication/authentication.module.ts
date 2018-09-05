import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthenticationRoutingModule} from './authentication-routing.module';
import {AuthenticationLayoutComponent} from './authentication-layout/authentication-layout.component';
import {LoginComponent} from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        AuthenticationRoutingModule
    ],
    declarations: [
        AuthenticationLayoutComponent,
        LoginComponent
    ]
})
export class AuthenticationModule {
}
