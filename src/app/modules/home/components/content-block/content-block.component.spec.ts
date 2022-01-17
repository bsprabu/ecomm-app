import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ServerService } from 'src/app/core/services/server.service';

import { ContentBlockComponent } from './content-block.component';

describe('ContentBlockComponent', () => {
  let component: ContentBlockComponent;
  let fixture: ComponentFixture<ContentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, NgxSpinnerModule],
      declarations: [ ContentBlockComponent ],
      providers: [ServerService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('load server data', () => {
    const service: ServerService = TestBed.inject(ServerService);
    component.loadServerData();
    expect(service.getAllServers()).toBeTruthy();
  });



});
