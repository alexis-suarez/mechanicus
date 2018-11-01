import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { User } from '../models/user';

(window as any).global = window;

@Injectable()
export class AuthService {

  private profile: User;
  private auth0: any;
  private status: boolean;

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
    this.status = false;
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

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    // const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    // localStorage.setItem('access_token', authResult.accessToken);
    // localStorage.setItem('id_token', authResult.idToken);
    // localStorage.setItem('expires_at', expiresAt);
    // Test
    this.status = true;
  }

  public logint(): void {
    this.status = true;
  }

  public logout(): void {
    // // Remove tokens and expiry time from localStorage
    // localStorage.removeItem('access_token');
    // localStorage.removeItem('id_token');
    // localStorage.removeItem('expires_at');
    // // Go back to the home route
    this.router.navigate(['/login']);
    // Test
    this.status = false;
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    // const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    // return new Date().getTime() < expiresAt;
    // Test
    return this.status;
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
