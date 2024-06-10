import React from 'react';
import { Control, FieldValues, UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/src/Form';
import { Input } from '@ui/src/Input';
import { TextBody1 } from '../Text';

type NumberInputFormItemProps = {
  control: Control<any, any>;
  name: string;
  label?: string | React.ReactNode;
  placeholder: string;
  required?: boolean;
  unit?: string;
  range?: [number, number];
};
/**
 * Renders a form item for an input field with optional required label.
 * @param {boolean} required - Indicates if the input field is required.
 * @param {Control} props.control - The control object from react-hook-form.
 * @param {string} props.name - The name of the input field.
 * @param {string | React.ReactNode} props.label - The label for the input field.
 * @param {string} props.placeholder - The placeholder for the input field.
 * @return {JSX.Element} The rendered input form item.
 */
const NumberInputFormItem = ({ range, unit, required = false, ...props }: NumberInputFormItemProps) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      rules={{ required: required, min: 0, max: 60 }}
      render={({ field }) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          let value = e.target.value;
          if (range) {
            if (parseInt(e.target.value) >= range[0] && parseInt(e.target.value) <= range[1]) {
              value = e.target.value;
            } else if (parseInt(e.target.value) > range[1]) {
              value = String(range[1]);
            } else {
              value = '';
            }
          }
          field.onChange(value);
        };

        return (
          <FormItem className="relative">
            <FormLabel>
              <TextBody1>
                {props.label}
                {required && <span className="text-destructive"> *</span>}
              </TextBody1>
            </FormLabel>
            <FormControl>
              <Input
                className="bg-gray-50"
                placeholder={props.placeholder}
                {...field}
                onChange={handleChange}
                type="number"
              />
            </FormControl>
            {unit && field.value && <span className="absolute bottom-4 left-8">{unit}</span>}

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default NumberInputFormItem;
