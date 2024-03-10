export const sortData = (dataProducts: any) => {
    return {
        type: "SORT" as const,
        payload: dataProducts
    };
};

export const deliverySort = (delivery: any) => {
    return {
        type: "DELIVERY" as const,
        payload: delivery
    }
};

export const uselessSort = (useless: any) => {
    return {
        type: "USELESS" as const,
        payload: useless
    }
};

export const conditionSort = (condition: any) => {
    return {
        type: "CONDITION" as const,
        payload: condition
    }
};

export const resultSort = (data: any) => {
    return {
        type: "RESULTSORT" as const,
        payload: data
    }
};
