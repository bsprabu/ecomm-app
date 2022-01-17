import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxSliderModule,
    NgxSpinnerModule
  ]
})
export class CoreModule { }
