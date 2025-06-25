// ng generate service services/auth

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: { id: number, name: string, username: string, email: string};
  message?: string;
}

@Injectable({ providedIn: 'root' })

export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  signIn(credentials: SignInCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/signin`, credentials);
  }

  signUp(credentials: SignUpCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/signup`, credentials);
  }
}
