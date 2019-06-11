import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(private httpClient: HttpClient) {

    }

    public get<T>(path: string, options: any = {}): Observable<T> {
        if (!options.params) {
            options.params = {};
        }
        options.params.apiKey = environment.apiKey;
        return this.httpClient.get<T>(environment.apiPath + path, options) as any;
    }

    public post(path: string, body: any, options?: any) {
        if (!options.params) {
            options.params = {};
        }
        options.params.apiKey = environment.apiKey;
        return this.httpClient.post(environment.apiPath + path, body, options);
    }
}
