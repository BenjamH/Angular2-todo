import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class IssueDataService {

  constructor(
      // private http: Http
  ) { }

  getIssues(): any {
    // this.http.get('https://api.github.com/repos/angular/angular/issues')
  }



}
