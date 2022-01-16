import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgxSpinnerModule } from 'ngx-spinner';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContentBlockComponent } from './components/content-block/content-block.component';



@NgModule({
  declarations: [
    HomeComponent,
    SideBarComponent,
    ContentBlockComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    InfiniteScrollModule,
    NgxSliderModule,
    NgxSpinnerModule
  ]
})
export class CoreModule { }
