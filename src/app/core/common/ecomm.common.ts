import { LabelType } from "@angular-slider/ngx-slider";
import { RamUIModel } from "src/app/core/models/server.model"

export const STORAGE_RANGE_LIST = [
    {
        value: 0,
        unit: 'GB'
    },
    {
        value: 250,
        unit: 'GB'
    },
    {
        value: 500,
        unit: 'GB'
    },
    {
        value: 1,
        unit: 'TB'
    },
    {
        value: 2,
        unit: 'TB'
    },
    {
        value: 3,
        unit: 'TB'
    },
    {
        value: 4,
        unit: 'TB'
    },
    {
        value: 8,
        unit: 'TB'
    },
    {
        value: 12,
        unit: 'TB'
    },
    {
        value: 24,
        unit: 'TB'
    },
    {
        value: 48,
        unit: 'TB'
    },
    {
        value: 72,
        unit: 'TB'
    }
]

export const RAM_LIST: RamUIModel[] = [
    {
        memory: '2',
        unit: 'GB',
        type: 'DDR4',
        checked: false
    },
    {
        memory: '4',
        unit: 'GB',
        type: 'DDR4',
        checked: false
    },
    {
        memory: '8',
        unit: 'GB',
        type: 'DDR4',
        checked: false
    },
    {
        memory: '12',
        unit: 'GB',
        type: 'DDR4',
        checked: false
    },
    {
        memory: '16',
        unit: 'GB',
        type: 'DDR4',
        checked: false
    },
    {
        memory: '24',
        unit: 'GB',
        type: 'DDR4',
        checked: false
    },
    {
        memory: '32',
        unit: 'GB',
        type: 'DDR4',
        checked: false
    },
    {
        memory: '48',
        unit: 'GB',
        type: 'DDR4',
        checked: false
    },
    {
        memory: '64',
        unit: 'GB',
        type: 'DDR4',
        checked: false
    },
    {
        memory: '96',
        unit: 'GB',
        type: 'DDR4',
        checked: false
    }
]

export const HARD_DISK_TYPES = ['SAS', 'SATA2', 'SSD']

// Range Slider
export const RANGE_SLIDER_CONFIG = {
    min: 0,
    max: 72, // 1Tb = 1000GB
    options: {
        showTicks: true,
        stepsArray: STORAGE_RANGE_LIST,
        translate: (value: number, label: LabelType): string => {
            const unit = STORAGE_RANGE_LIST.find(r => r.value === value)?.unit;
            return `${value} ${unit}`;
        }
    }
}