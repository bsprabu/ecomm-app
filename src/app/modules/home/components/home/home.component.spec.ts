import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ContentBlockComponent } from '../content-block/content-block.component';

import { HomeComponent } from './home.component';
import { ServerService } from 'src/app/core/services/server.service';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, NgxSliderModule, NgxSpinnerModule],
      declarations: [ HomeComponent, SideBarComponent, ContentBlockComponent ],
      providers: [ServerService],
      schemas: [NO_ERRORS_SCHEMA]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
