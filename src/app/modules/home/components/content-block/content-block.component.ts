import { Component, OnInit } from '@angular/core';
import { debounceTime, map, Observable, Subscription } from 'rxjs';

import { NgxSpinnerService } from 'ngx-spinner';

import { ServerQueryParams, ServerUIModel } from 'src/app/core/models/server.model';
import { ServerService } from 'src/app/core/services/server.service';

@Component({
  selector: 'ecomm-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.scss']
})
export class ContentBlockComponent implements OnInit {

  allServer$: Observable<ServerUIModel[]> | undefined;

  constructor(private serverService: ServerService, private spinner: NgxSpinnerService) { }
 
  loadServerData() {
    this.serverService.currentQueryparam.subscribe((queryParams) => {
      if(queryParams.size !== 0) {
        this.allServer$ = this.serverService.filterServersByParam(queryParams).pipe(debounceTime(3000), map( res => res.servers));
      } else {
        this.allServer$ = this.serverService.getAllServers().pipe(map( res => res.servers));
      }
      this.spinner.show();
    });
  }

  ngOnInit(): void { 
    this.loadServerData(); 
  }

}
