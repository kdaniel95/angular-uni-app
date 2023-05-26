import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  constructor() {}

  private userDataSubject: Subject<any> = new Subject<any>();

  public userData$ = this.userDataSubject.asObservable();

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return this.getToken() != null;
  }

  getUserToken(neptunCode: string): string {
    switch (neptunCode) {
      // Student
      case 'ABC123':
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODUwNzYzNDksImV4cCI6MTcxNjYxMjM0OSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImlkIjoiMSIsIm5lcHR1bkNvZGUiOiJBQkMxMjMiLCJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwicm9sZXMiOlsiU3R1ZGVudCJdfQ.aM_2MY6X1XVlxqrrVPAfrHbAgQmzmeIhVz5BoNWvDOs';
      // Teacher
      case 'DEF456':
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODUwNzYzNDksImV4cCI6MTcxNjYxMjM0OSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImlkIjoiMiIsIm5lcHR1bkNvZGUiOiJERUY0NTYiLCJlbWFpbCI6ImphbmUuc21pdGhAZXhhbXBsZS5jb20iLCJyb2xlcyI6WyJUZWFjaGVyIl19.Myb737DK1Z7S0GpYpmHy-CP6w9n4T84fIV26TjxInak';
      // Admin
      case 'GHI789':
        return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODUwNzYzNDksImV4cCI6MTcxNjYxMjM0OSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImlkIjoiMyIsIm5lcHR1bkNvZGUiOiJHSEk3ODkiLCJlbWFpbCI6ImFsaWNlLmpvaG5zb25AZXhhbXBsZS5jb20iLCJyb2xlcyI6WyJUZWFjaGVyIiwiQWRtaW4iXX0.n82JhmyFVGkjN2KdkAi5MSCTvoSN8MbFVL6NhBp45aY';
    }
    return '';
  }

  setUserData(userData: any): void{

    if(!localStorage.getItem('userData')){
      localStorage.setItem('userData', userData);
    }else{
      userData = localStorage.getItem('userData');
    }

    this.userDataSubject.next(JSON.parse(userData));
  }
}
