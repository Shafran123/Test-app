import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http : HttpClient
  ) { }

  public getData(){
    return this.http.get('https://app-api.difx.io/api/v1/pairs')

  }
}
