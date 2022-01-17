import { RamUIModel } from "src/app/core/models/server.model"

export const RANGE_SLIDER_CONFIG = {
    min: 0,
    max: 7200,
    options: {
      floor: 0,
      ceil: 7200,
      step: 250,
      showTicks: true
    }
}

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