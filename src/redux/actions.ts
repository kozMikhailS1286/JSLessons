export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = {
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
    amountOfBYN: string,
    amountOfCurrency: string
};


export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE, amountOfBYN, amountOfCurrency
    } as const
};





export type ChangeAction = {
    type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
    isBuying: boolean
};

export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
    return {type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION, isBuying} as const
};





export type ChangeCurrentCurrencyType = {
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
    currentCurrency: string
};

export const ChangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => ({
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY, currentCurrency
} as const);

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;