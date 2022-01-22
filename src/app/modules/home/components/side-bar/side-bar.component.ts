import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';

import { Options } from '@angular-slider/ngx-slider/options';
import { ChangeContext } from '@angular-slider/ngx-slider';

import { RamUIModel, ServerQueryParams } from 'src/app/core/models/server.model';
import { ServerService } from 'src/app/core/services/server.service';
import { HARD_DISK_TYPES, RAM_LIST, RANGE_SLIDER_CONFIG, STORAGE_RANGE_LIST } from 'src/app/core/common/ecomm.common';

@Component({
  selector: 'ecomm-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, AfterViewInit {

  @ViewChild('locationInput') locationInput: ElementRef = new ElementRef('');

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
    const storageMin = STORAGE_RANGE_LIST.find(s => s.value === this.rangeSlider.min);
    const storageMax = STORAGE_RANGE_LIST.find(s => s.value === this.rangeSlider.max);
    const minVal = storageMin?.unit === 'TB' ? storageMin.value * 1000 : storageMin?.value;
    const maxVal = storageMax?.unit === 'TB' ? storageMax.value * 1000 : storageMax?.value;
    if (minVal && maxVal) {
      this.serverQueryParams.set('storageMin', minVal.toString());
      this.serverQueryParams.set('storageMax', maxVal.toString());
      this.serverService.setQueryParam(this.serverQueryParams);
    }
  }

  // Reser Range Filter
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
    } else {
      this.ramFilterDirty = false;
    }
    this.serverService.setQueryParam(this.serverQueryParams);
  }

  // RAM Filter Reset
  onRamFilterReset() {
    this.ramFilterDirty = false;
    this.ramList.map(r => r.checked = false);
    this.serverQueryParams.delete('ram');
    this.ramToFilterList = [];
    this.serverService.setQueryParam(this.serverQueryParams);
  }

  // Load RAM Data
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

  // On Hard Disk Dropdown Change
  onhardDiskSelChange(event: any) {
    this.hddFilterDirty = true;
    if (event.target.value !== 'select') {
      this.serverQueryParams.set('hdd', event.target.value);
    } else {
      this.serverQueryParams.delete('hdd');
    }    
    this.serverService.setQueryParam(this.serverQueryParams);
  }

  // Hard Disk Filter Reset
  onHddFilterReset() {
    this.hddFilterDirty = false;
    this.loadHardDiskData();
    this.serverQueryParams.delete('hdd');
    this.serverService.setQueryParam(this.serverQueryParams);
  }

  filterServerByLocation() {
    console.log(this.locationInput.nativeElement.value);
    fromEvent(this.locationInput.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(250),
        distinctUntilChanged(),
        tap((event) => {
          const strLocation = this.locationInput.nativeElement.value;
          if (strLocation.length > 3) {
            this.serverQueryParams.set('location', strLocation.toString());
          } else {
            this.serverQueryParams.delete('location');
          }
          this.serverService.setQueryParam(this.serverQueryParams);
        })
      )
      .subscribe();
  }


  ngOnInit(): void {
    this.loadRamData();
    this.loadHardDiskData();
  }

  ngAfterViewInit(): void {
    // Filter by location
    this.filterServerByLocation();
  }

}

interface RangeSlider {
  min: number,
  max: number,
  options: Options
}
