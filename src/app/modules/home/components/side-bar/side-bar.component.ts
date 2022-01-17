import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider/options';
import { ChangeContext } from '@angular-slider/ngx-slider';

import { RamUIModel, ServerQueryParams } from 'src/app/core/models/server.model';
import { ServerService } from 'src/app/core/services/server.service';
import { HARD_DISK_TYPES, RAM_LIST, RANGE_SLIDER_CONFIG } from 'src/app/core/common/ecomm.common';

@Component({
  selector: 'ecomm-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  sliderDirty = false;
  ramFilterDirty = false;
  hddFilterDirty = false;

  serverQueryParams = new Map<string, string>();
  rangeSlider: RangeSlider = Object.assign({}, RANGE_SLIDER_CONFIG);

  ramList: RamUIModel[] = [];
  ramToFilterList: RamUIModel[] = [];
  diskTypeDdList: string[] = [];

  constructor(private serverService: ServerService) { }

  // Range Filter
  onSliderChange(e: ChangeContext) {
    this.sliderDirty = true;
    this.serverQueryParams.set('storageMin', this.rangeSlider.min.toString());
    this.serverQueryParams.set('storageMax', this.rangeSlider.max.toString());
    this.serverService.setQueryParam(this.serverQueryParams);
  }

  onSliderReset() {
    this.sliderDirty = false;
    this.rangeSlider = Object.assign({}, RANGE_SLIDER_CONFIG);
    this.serverQueryParams.delete('storageMin');
    this.serverQueryParams.delete('storageMax');
    this.serverService.setQueryParam(this.serverQueryParams);
  }

  // RAM Filter

  onRamFilterChange(ram: RamUIModel) {
    this.serverQueryParams.delete('ram');
    this.ramFilterDirty = true;
    if (this.ramToFilterList.length === 0 && ram.checked) {
      this.ramToFilterList.push(ram);
    } else {
      const ramIdx = this.ramToFilterList.findIndex(r => r.memory === ram.memory);
      if (ramIdx === -1 && ram.checked) {
        this.ramToFilterList.push(ram)
      } else if (ramIdx !== -1 && !ram.checked) {
        this.ramToFilterList.splice(ramIdx, 1);
      }
    }
    const ramList = this.ramToFilterList.map(r => r.memory)
    if (ramList.length > 0) {
      this.serverQueryParams.set('ram', ramList.join());
    }  else {
      this.ramFilterDirty = false;
    }
    this.serverService.setQueryParam(this.serverQueryParams);
  }

  onRamFilterReset() {
    this.ramFilterDirty = false;
    this.ramList.map(r => r.checked = false);
    this.serverQueryParams.delete('ram');
    this.ramToFilterList = [];
    this.serverService.setQueryParam(this.serverQueryParams);
  }

  loadRamData() {
    this.ramList = [];
    RAM_LIST.forEach(ram => {
      this.ramList.push(ram)
    });
  }

  // HDD Filter Section
  loadHardDiskData() {
    this.diskTypeDdList = HARD_DISK_TYPES;
  }

  onhardDiskSelChange(event: any) {
    this.hddFilterDirty = true;
    if(event.target.value !== 'select') {      
      this.serverQueryParams.set('hdd', event.target.value);
      this.serverService.setQueryParam(this.serverQueryParams);
    } else {
      this.serverQueryParams.delete('hdd');
      this.serverService.setQueryParam(this.serverQueryParams);
    }
  }

  onHddFilterReset() {
    this.hddFilterDirty = false;
    this.loadHardDiskData();
    this.serverQueryParams.delete('hdd');
    this.serverService.setQueryParam(this.serverQueryParams);
  }


  ngOnInit(): void {
    this.loadRamData();
    this.loadHardDiskData();
  }

}

interface RangeSlider {
  min: number,
  max: number,
  options: Options
}
