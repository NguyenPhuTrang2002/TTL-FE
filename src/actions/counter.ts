export const increment = (isActive: boolean) => {
    return {
        type: "ACTIVE",
        payload: isActive,
    };
};