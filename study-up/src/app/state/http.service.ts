import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(
        private http: HttpClient, 
        private authService: AuthService
    ) { }

    private getHeaders(): HttpHeaders {
        const headersConfig: any = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        if (this.authService.isAuthenticated()) {
            headersConfig['Authorization'] = `Bearer ${this.authService.getToken()}`;
        }

        return new HttpHeaders(headersConfig);
    }

    get<T>(url: string, params?: any): Observable<T> {
        return this.http.get<T>(url, { headers: this.getHeaders(), params });
    }
}
