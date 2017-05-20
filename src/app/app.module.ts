/*Angular Modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*My Modules*/
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "app/core/core.module";

/*Components*/
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
