import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';

import { ServerService } from './server.service';

describe('ServerService', () => {
  let service: ServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
    });
    service = TestBed.inject(ServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all server data', () => {
    const service: ServerService = TestBed.inject(ServerService);
    expect(service.getAllServers()).toBeTruthy();
  });

  it('filter servers by paramters', () => {
    const service: ServerService = TestBed.inject(ServerService);
    // parameter checked
    const param = new Map<string, string>();
    param.set('ram', '2');
    service.setQueryParam(param);
    service.currentQueryparam.subscribe(res => expect(res.size).toBeLessThanOrEqual(1));
    service.filterServersByParam(param).subscribe( res => expect(res.servers.length).toEqual(0));
  });

  it('filter servers by paramters', async () => {
    const service: ServerService = TestBed.inject(ServerService);
    // parameter checked
    const param = new Map<string, string>();
    param.set('ram', '2');
    service.filterServersByParam(param).subscribe( res => expect(res.servers.length).toEqual(0));
  });

  it('filter server data by RAM query paramters', async () => {
    const service: ServerService = TestBed.inject(ServerService);
    const param = new Map<string, string>();
    service.filterServersByParam(param).subscribe( res => expect(res.servers.length).toEqual(0));
  });

  it('handle Http Error', () => {
    const errorResponse = new HttpErrorResponse({
      error: { code: `some code`, message: `some message.` },
      status: 400,
      statusText: 'Bad Request',
   });
   service.getAllServers().subscribe( data => fail('Should have failed with 404 error'),
   (error: HttpErrorResponse) => {
     expect(error.status).toEqual(404);
     expect(error.error).toContain('404 error');
   });
  });



});
