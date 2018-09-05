import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.login().subscribe(
            data => {
                console.log('success ', data);
            },
            error => {
                console.log('Error', error);
            });
    }

}
