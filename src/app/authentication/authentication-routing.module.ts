import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationLayoutComponent} from './authentication-layout/authentication-layout.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [{
    path: '', component: AuthenticationLayoutComponent,
    children: [
        {path: '', redirectTo: 'login', pathMatch: 'full'},
        {path: 'login', component: LoginComponent},
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
