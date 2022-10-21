import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iprofile } from 'src/app/models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  urlApi_profile = 'https://lent0d-8080.preview.csb.app/api/profile';

  constructor(private httpclient: HttpClient) {}

  get_All_Profiles(): Observable<Iprofile[]> {
    return this.httpclient.get<Iprofile[]>(this.urlApi_profile);
  }
  get_Profile(id: Number): Observable<Iprofile> {
    return this.httpclient.get<Iprofile>(`${this.urlApi_profile}/${id}`);
  }
  edit_Profile(id: Number, profile: any): Observable<Iprofile[]> {
    return this.httpclient.patch<Iprofile[]>(
      `${this.urlApi_profile}/${id}`,
      profile
    );
  }

  remove_Profile(id: Number): Observable<Iprofile> {
    return this.httpclient.delete<Iprofile>(`${this.urlApi_profile}/${id}`);
  }
}
