import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from '../../shared/services/services.module'

@Component({
  selector: 'hn-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  items : any[];

  constructor(private _hnApi : HackernewsApiService ) { 
  }

  ngOnInit() {
    this._hnApi.fetchFeeds("news",1)
        .subscribe((items:any[]) => this.items = items,error=> console.log(`Some error had occured ${error}`));
  }

}
