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

export interface RamUIModel extends IStorageUIModel {
    checked?: boolean;
}


export interface HddUIModel extends IStorageUIModel {
    count: string;
}

interface IStorageUIModel {
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