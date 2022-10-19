import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipost } from 'src/app/models/post';
const apiUrl = `https://assmegnt-backend-angular.vercel.app/`;

@Injectable({ providedIn: 'root' })
export class PostService {
  urlApi = 'https://assmegnt-backend-angular.vercel.app/api/posts';
  constructor(private httpclient: HttpClient) {}

  get_All_Post(): Observable<Ipost[]> {
    return this.httpclient.get<Ipost[]>(this.urlApi);
  }
  get_Post(id: Number): Observable<Ipost[]> {
    return this.httpclient.get<Ipost[]>(`${this.urlApi}/${id}`);
  }
  get_Detail(id: Number): Observable<Ipost[]> {
    return this.httpclient.get<Ipost[]>(`${this.urlApi}/${id}`);
  }
  add_Post(post: any): Observable<Ipost[]> {
    return this.httpclient.post<Ipost[]>(this.urlApi, post);
  }
  edit_Post(id: Number, post: any): Observable<Ipost[]> {
    return this.httpclient.patch<Ipost[]>(`${this.urlApi}/${id}`, post);
  }
  remove_Post(id: Number): Observable<Ipost> {
    return this.httpclient.delete<Ipost>(`${this.urlApi}/${id}`);
  }
}
