/**
 * Formats a number to Indian Rupees (₹) following Indian numbering conventions (en-IN).
 * Examples: ₹499, ₹999, ₹1,499
 */
export const formatINR = (amount: number, forceDecimals = false): string => {
  const isFractional = amount % 1 !== 0;
  const formatted = amount.toLocaleString('en-IN', {
    minimumFractionDigits: forceDecimals ? 2 : (isFractional ? 2 : 0),
    maximumFractionDigits: forceDecimals ? 2 : (isFractional ? 2 : 0),
  });
  return `₹${formatted}`;
};
