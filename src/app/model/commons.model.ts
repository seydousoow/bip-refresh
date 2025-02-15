export type ISelectOption<T = string> = {
  label: string;
  value: T;
  selected?: boolean;
}
