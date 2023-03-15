import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.baseUrl;
  private readonly tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  public async fetchToken(): Promise<void> {
    const { token } = (await this.http
      .get(`${this.apiUrl}auth/anonymous?platform=subscriptions`)
      .toPromise()) as any;
    this.setToken(token);
  }

  public logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  public hasToken(): boolean {
    return !!this.getToken();
  }

  public isAuthenticated(): boolean {
    return this.hasToken();
  }

  public setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  public removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
    });
  }
}
