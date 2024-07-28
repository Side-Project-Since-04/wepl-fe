import React from 'react';
import { Control, FieldValues, UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/src/Form';
import { Input } from '@ui/src/Input';
import { TextBody1 } from '../../Text';

type NumberInputFormItemProps = {
  control: Control<any, any>;
  name: string;
  label?: string | React.ReactNode;
  placeholder?: string;
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
const TimeInputFormItem = ({ range, unit, required = false, ...props }: NumberInputFormItemProps) => {
  const validateTimeInput = (value: string, range?: [number, number]): string => {
    if (!range) return value;
    const num = parseInt(value);
    if (num >= range[0] && num <= range[1]) return value;
    if (num > range[1]) return String(range[1]);
    return '';
  };

  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const value = validateTimeInput(e.target.value, range);
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
                className="bg-gray-50 h-[56px] text-2xl pl-[14px]"
                placeholder={props.placeholder}
                {...field}
                onChange={handleChange}
                type="number"
              />
            </FormControl>
            {unit && field.value && <span className="absolute bottom-[16px] left-[35px]">{unit}</span>}

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default TimeInputFormItem;
