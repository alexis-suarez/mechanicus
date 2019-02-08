import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { User } from '../models/user';

(window as any).global = window;

@Injectable()
export class AuthService {

  constructor(public router: Router) {
  }

  public logint(user: User): void {
    localStorage.setItem('id', user.id);
    localStorage.setItem('username', user.username);
    localStorage.setItem('role', user.role);
    // Go to Home Page
    this.router.navigate(['/home-view']);
  }

  public logout(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    // Go to Login Page
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('id') !== null;
  }

  public getUserName(): string {
    return localStorage.getItem('username');
  }

  public getRole(): string {
    return localStorage.getItem('role');
  }
}
