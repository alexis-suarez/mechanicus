import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { User } from '../models/user';

(window as any).global = window;

@Injectable()
export class AuthService {

  private profile: User;
  private auth0: any;

  public getProfile(): User {
    return this.profile;
  }

  public getUserName(): string {
    return this.profile.username;
  }

  // auth0 = new auth0.WebAuth({
  //   clientID: 'B5nzRtCg0Ud2ftulWKzfWvUOY5amzReu',
  //   domain: 'aurum.auth0.com',
  //   responseType: 'token id_token',
  //   redirectUri: 'http://localhost:3000/callback',
  //   scope: 'openid profile'
  // });

  constructor(public router: Router) {
  }

  // public login(): void {
  //   this.auth0.authorize();
  // }

  // // ...
  // public handleAuthentication(): void {
  //   this.auth0.parseHash((err, authResult) => {
  //     if (authResult && authResult.accessToken && authResult.idToken) {
  //       window.location.hash = '';
  //       this.setSession(authResult);
  //       this.router.navigate(['/home']);
  //     } else if (err) {
  //       this.router.navigate(['/home']);
  //       console.log(err);
  //     }
  //   });
  // }

  private setSession(): void {
    // Set the time that the Access Token will expire at
    // const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    // localStorage.setItem('access_token', authResult.accessToken);
    // localStorage.setItem('id_token', authResult.idToken);
    // localStorage.setItem('expires_at', expiresAt);
    // Test
    localStorage.setItem('status', 'True');
    this.router.navigate(['/home']);
  }

  public logint(): void {
    this.setSession();
  }

  public logout(): void {
    // // Remove tokens and expiry time from localStorage
    // localStorage.removeItem('access_token');
    // localStorage.removeItem('id_token');
    // localStorage.removeItem('expires_at');
    localStorage.removeItem('status');
    // // Go back to the home route
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    // const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    // return new Date().getTime() < expiresAt;
    // Test
    return localStorage.getItem('status') === 'True';
  }

  // public getProfile(cb): void {
  //   const accessToken = localStorage.getItem('access_token');
  //   if (!accessToken) {
  //     throw new Error('Access Token must exist to fetch profile');
  //   }

  //   const self = this;
  //   this.auth0.client.userInfo(accessToken, (err, profile) => {

  //   if (profile) {
  //     self.profile = profile;
  //   }

  //   cb(err, profile);
  //   });
  // }

}
