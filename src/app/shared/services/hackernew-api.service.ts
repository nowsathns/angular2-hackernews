import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import{ Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NewsItem } from "app/shared/models/news-item";

@Injectable()
export class HackernewsApiService {
  baseURL : string;

  constructor(private _http:Http) { 
    this.baseURL = 'https://node-hnapi.herokuapp.com';
  }
  
  fetchFeeds(feedType:string,page:number)  : Observable<NewsItem[]> {
    // ` is used as string literal added in ES 6
    return this._http
            .get(`${this.baseURL}/${feedType}?page=${page}`)
            .map((response) => response.json());
  }
}
