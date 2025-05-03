export enum FieldName {
  LIMIT = "limitField",
  VOLUME = "volumeField",
}
export enum Validation {
  APPROVED = "godkjent",
  EMPTY = "tom",
  PARTIALLYFILLED = "delvis utfylt",
  INVALID = "ugyldig",
}

export enum FieldName {
  VOLUMEFIELD = "volumeField",
  LIMITFIELD = "limitField",
}

export type ButtonsType = "BUY" | "SELL";
export type OrderObject = {
  cryptoVolume: string;
  limitPrice: string;
  titleMain: string;
  titleSecondary: string;
};

export type InputObject = {
  title?: string;
  name?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};
