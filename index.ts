import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NetworkService {
  constructor(private http: HttpClient) {}

  private getTokenHeader(token: string | null): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  private getHeaders(token: string | null, isFormData: boolean): HttpHeaders {
    let headers = token ? this.getTokenHeader(token) : new HttpHeaders();
    if (isFormData) {
      headers = headers.set('Content-Type', 'multipart/form-data');
    } else {
      headers = headers.set('Content-Type', 'application/json');
    }
    return headers;
  }

  public post(url: string, data: any, token: string | null = null, isFormData: boolean = false): Observable<any> {
    const headers = this.getHeaders(token, isFormData);
    return this.http.post(url, isFormData ? data : JSON.stringify(data), { headers });
  }

  public put(url: string, data: any, token: string | null = null, isFormData: boolean = false): Observable<any> {
    const headers = this.getHeaders(token, isFormData);
    return this.http.put(url, isFormData ? data : JSON.stringify(data), { headers });
  }

  public patch(url: string, data: any, token: string | null = null, isFormData: boolean = false): Observable<any> {
    const headers = this.getHeaders(token, isFormData);
    return this.http.patch(url, isFormData ? data : JSON.stringify(data), { headers });
  }

  public delete(url: string, token: string | null = null): Observable<any> {
    const headers = token ? this.getTokenHeader(token) : new HttpHeaders();
    return this.http.delete(url, { headers });
  }
}
