export interface ConfigurationUIModel {
    servers:ServerUIModel[]
}

export interface ServerUIModel {
    model: string;
    ram: RamUIModel,
    hdd: HddUIModel,
    location: string;
    price: IPriceUIModel
}

export interface RamUIModel extends StorageUIModel {
    checked?: boolean;
}


export interface HddUIModel extends StorageUIModel {
    count: string;
}

export interface StorageUIModel {
    memory: string;
    unit: string;
    type: string;
}

export interface IPriceUIModel {
    currency: string;
    currencySymbol: string;
    amountCents: number;
}

export interface ServerQueryParams {
    range?: {
        min: number,
        max: number,
    },
    ram?: string[],
    hdd?: string[]
}