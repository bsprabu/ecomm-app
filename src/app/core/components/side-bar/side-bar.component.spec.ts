import { ChangeContext } from '@angular-slider/ngx-slider';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RamUIModel } from 'src/app/models/server.model';
import { ServerService } from 'src/app/services/server.service';
import { RANGE_SLIDER_CONFIG } from '../../common/ecomm.common';

import { SideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [SideBarComponent],
      providers: [ServerService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Range Slider onSliderChange ', () => {
    const rangeSlider = Object.assign({}, RANGE_SLIDER_CONFIG);
    const changeContex = new ChangeContext();
    component.onSliderChange(changeContex);
    expect(component.sliderDirty).toBeTrue();
  });


  it('Range Slider reset onSliderReset()', () => {
    component.onSliderReset();
    expect(component.sliderDirty).toBeFalse();
  });

  it('onRamFilterChange value check or uncheck', () => {
    const ramChecked: RamUIModel = {
      memory: '2',
      unit: 'GB',
      type: 'DDR4',
      checked: true
    }
    component.onRamFilterChange(ramChecked);
    expect(component.ramToFilterList.length).toBeLessThanOrEqual(1);
    const ramUnchekced: RamUIModel = {
      memory: '2',
      unit: 'GB',
      type: 'DDR4',
      checked: false
    }
    component.onRamFilterChange(ramUnchekced);
    expect(component.ramToFilterList.length).toBeLessThanOrEqual(0);
  });

  it('RAM filter reset onRamFilterReset()', () => {
    component.onRamFilterReset();
    expect(component.ramToFilterList.length).toBeLessThanOrEqual(0);
  });

  it('Hard Disk change onhardDiskSelChange() ', () => { 
    const event = {
      target: {
        value: 'SATA2'
      }
    }; 
    component.onhardDiskSelChange(event);
    expect(component.hddFilterDirty).toBeTrue();
  });


  it('Hard Disk filter reset onSliderReset()', () => {
    component.onHddFilterReset();
    expect(component.hddFilterDirty).toBeFalse();
  });


});
