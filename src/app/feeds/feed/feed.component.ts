import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HackernewsApiService } from '../../shared/services/services.module'
import { NewsItem } from "../../shared/models/news-item";
import 'rxjs/add/operator/switchmap'

@Component({
  selector: 'hn-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  items : NewsItem[];
  feedType : string;
  pageNo : number;
  listStart : number = 1;

  constructor(private _hnApi : HackernewsApiService,
              private _route : ActivatedRoute) { 
  }

  ngOnInit() {
    this.listStart = 1;
    this._route.data.subscribe((data :any) => this.feedType = data.feedType ,error => console.log(error))
    this._route.params.switchMap((params :any)=> { 
                                  this.pageNo = + params.page || 1; 
                                  return this._hnApi.fetchFeeds(this.feedType,this.pageNo);
                                }).subscribe((items:NewsItem[]) => {  
                                      this.items = items 
                                      this.listStart = (this.pageNo - 1) * 30;
                                      setTimeout(()=> window.scrollTo(0,0));
                                  },error=> console.log(`Some error had occured ${error}`));
  }

}
