import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from "app/shared/pipes/pipes.module";

import { FeedComponent } from './feed/feed.component';
import { ItemComponent } from './item/item.component';
import { RouterModule } from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    RouterModule
  ],
  declarations: [FeedComponent, ItemComponent],
  exports: [FeedComponent],
  
})
export class FeedsModule { }
