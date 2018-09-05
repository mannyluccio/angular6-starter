import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationModule} from './authentication/authentication.module';
import {HomeModule} from './home/home.module';

const routes: Routes = [
    {
        path: 'authentication',
        loadChildren:  () => AuthenticationModule
    },    {
        path: 'home',
        loadChildren:  () => HomeModule
    },
    {
        path: '',
        redirectTo: 'authentication',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
