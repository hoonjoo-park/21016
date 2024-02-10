export const convertBinaryToDecimal = (binary: string): number => {
  return parseInt(binary, 2);
};

export const convertDecimalToBinary = (decimal: number): string => {
  return decimal.toString(2);
};

export const convertBinaryToHex = (binary: string): string => {
  return parseInt(binary, 2).toString(16);
};

export const convertHexToBinary = (hex: string): string => {
  return parseInt(hex, 16).toString(2);
};

export const convertDecimalToHex = (decimal: number): string => {
  return decimal.toString(16);
};
