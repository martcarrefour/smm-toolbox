import { DetailedHTMLProps, FormEvent, ReactNode } from "react";

export interface Field {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export interface Form {
  fields: Field[];
  onSubmit: (formData: FormData) => void;
  submitButtonText: string;
  className?: string;
  error?: string | null;
}

export type FormEventHandler<T = HTMLFormElement> = (
  event: FormEvent<T>
) => void;
