export const IDGenerator = () => Date.now().toString();

export const getID = (itemID, className) => `i-${itemID}-${className}`;