import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HomeRoutingModule } from './home-routing.module';
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
    HomeRoutingModule,
    NgxSliderModule,
    NgxSpinnerModule
  ]
})
export class HomeModule { }
