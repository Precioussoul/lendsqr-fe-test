/**
 * Formats a number with commas as thousand separators
 * @param num - The number to format
 * @returns Formatted number as string with thousand separators
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
