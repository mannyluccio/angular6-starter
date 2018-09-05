import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApplicationHttpClient} from '../utils/http-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogged: boolean;

  constructor(private httpClient: ApplicationHttpClient) { }

  login(): Observable<any> {

    return this.httpClient.Post( 'login',{ username: 'a', ass: 'b'});
  }
}
