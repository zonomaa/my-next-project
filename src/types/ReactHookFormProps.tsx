import {
  FieldElement,
  ValidationOptions,
  FieldName,
  FieldValues,
} from 'react-hook-form';

export interface ReactHooksFormProps {
  register<Element extends FieldElement = FieldElement>(): (
    ref: Element | null
  ) => void;
  register<Element extends FieldElement = FieldElement>(
    validationOptions: ValidationOptions
  ): (ref: Element | null) => void;
  register<Element extends FieldElement = FieldElement>(
    name: FieldName<FieldValues>,
    validationOptions?: ValidationOptions
  ): void;
  register<Element extends FieldElement = FieldElement>(
    namesWithValidationOptions: Record<
      FieldName<FieldValues>,
      ValidationOptions
    >
  ): void;
  register<Element extends FieldElement = FieldElement>(
    ref: Element,
    validationOptions?: ValidationOptions
  ): void;
  register<Element extends FieldElement = FieldElement>(
    refOrValidationOptions: ValidationOptions | Element | null,
    validationOptions?: ValidationOptions
  ): ((ref: Element | null) => void) | void;
  validation?: ValidationOptions;
}
