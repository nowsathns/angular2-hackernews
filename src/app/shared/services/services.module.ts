import { NgModule } from '@angular/core';
import  {HttpModule} from '@angular/http'
import { HackernewsApiService } from "app/shared/services/hackernew-api.service";

@NgModule({
  imports: [
    HttpModule
  ]
})
export class ServicesModule { 
  static forRoot(){
    return {
      ngModule : ServicesModule,
      providers : [
        HackernewsApiService
      ]
    };
  }
}

export {
  HackernewsApiService
}
