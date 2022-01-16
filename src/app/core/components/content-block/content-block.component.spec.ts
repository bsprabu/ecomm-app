import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServerService } from 'src/app/services/server.service';

import { ContentBlockComponent } from './content-block.component';

describe('ContentBlockComponent', () => {
  let component: ContentBlockComponent;
  let fixture: ComponentFixture<ContentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
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
