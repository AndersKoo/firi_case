import { Validation } from "./type";

export const priceValidation = (input: string) => {
  const partiallyFilled = /^\d*\.?\d*$/;
  const regex = /^\d+(\.\d+)?$/;
  if (regex.test(input)) return Validation.APPROVED;
  if (input.trim() === "") return Validation.EMPTY;
  if (partiallyFilled.test(input)) return Validation.PARTIALLYFILLED; // f.eks .45, 1.34
  return Validation.INVALID;
};

export const cryptoValidation = (input: string) => {
  const partiallyFilled = /^\d+(?:\.\d*)?$/;
  const regex = /^\d+(\.\d{1,8})?$/;
  if (regex.test(input)) return Validation.APPROVED;
  if (input.trim() === "") return Validation.EMPTY;
  if (partiallyFilled.test(input)) return Validation.PARTIALLYFILLED; // f.eks 0.
  return Validation.INVALID;
};
