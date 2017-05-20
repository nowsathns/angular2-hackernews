/*Angular Modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*My Modules*/
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "app/core/core.module";
import { ServicesModule } from "app/shared/services/services.module";

/*Components*/
import { AppComponent } from './app.component';
import { FeedsModule } from "app/feeds/feeds.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    FeedsModule,
    ServicesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
