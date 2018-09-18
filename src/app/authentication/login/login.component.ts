import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public model = {
        email: '',
        password: '',
    };
    constructor(private authService: AuthService) {

    }

    ngOnInit() {

    }

    login(f: any) {
        if (f.invalid) {
            return;
        }

        // stop here if form is invalid
        this.authService.login({email: this.model.email, password: this.model.password}).subscribe(
            data => {
                console.log('success ', data);
            },
            error => {
                console.log('Error', error);
            });
    }

}
