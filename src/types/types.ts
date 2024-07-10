// src/types/types.ts
export interface Question {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: string[]; // Para select y radio
}

export interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  isFirst: boolean;
  isLast: boolean;
  options?: string[]; // Para select y radio
}
